import DynamicLayer from '@/components/layout/DynamicLayer'
import TasksContent from '@/components/layout/TasksContent'

const page = ({searchParams}) => {
  const encryptedCommand = searchParams?.command
  const decodedData = atob(encryptedCommand)
  const parsed = JSON.parse(decodedData)

  console.log(parsed)

  return (
    <div>
      <section>hola1</section>
      <section>hola2</section>
      <DynamicLayer >
        <TasksContent text={parsed.nombre}/>
      </DynamicLayer>
    </div>
  );
}

export default page