'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { cn } from '@/lib/utils'
import { textBold } from '@/styles/fonts'
import { useForm } from 'react-hook-form'
import ButtonAuth from './ButtonAuth'
import { signIn } from 'next-auth/react'

const LoginForm = () => {
  const {register, handleSubmit, errors} = useForm()

  const onSubmit = async (data) => {
    const {email,password} = data

    const response = await signIn("credentials",  {
      email,
      password,
      redirect: true,
      callbackUrl: "/workspace",
    });

  }

  return (
    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
       <div className="p-[52px] flex flex-col gap-[27px]">
          <Input
            name={"email"}
            tipo={"default"}
            placeholder={"Email"}
            type={"email"}
            autoComplete={''}
            {...register('email')}
          />
          <Input
            name={"password"}
            tipo={"default"}
            placeholder={"Password"}
            type={"password"}
            autoComplete={'current-password'}
            {...register('password')}
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className={" flex justify-center"}>
            <ButtonAuth type={'submit'} >Iniciar sesion</ButtonAuth>
          </div>
          <div className="flex items-center gap-5 px-[56px]">
            <hr className="w-full border" />
            <p className={cn(textBold.className)}>o</p>
            <hr className="w-full border" />
          </div>
          <div className="w-full flex justify-center gap-[22px]">
            <Button tipo={"squared"} size={"sm"}>
              {<FaGoogle className="text-lg"></FaGoogle>}
            </Button>
            <Button tipo={"squared"} size={"sm"}>
              {<FaGithub className="text-lg"></FaGithub>}
            </Button>
          </div>
          <p className={cn("text-gray-500 text-center")}>
            O si aún no tienes una cuenta{" "}
            <span className={cn(textBold.className, "text-primary")}>
              Registrate
            </span>{" "}
          </p>
        </div>
    </form>
  )
}

export default LoginForm