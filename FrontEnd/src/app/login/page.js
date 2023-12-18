
import LoginForm from "@/components/layout/LoginForm";

const page = async () => {


  return (
    <div className="w-full h-full">
      <section className="h-screen flex flex-col justify-center overflow-hidden">
        <LoginForm  />
      </section>
    </div>
  );
};

export default page;
