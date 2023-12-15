import DynamicLayer from "@/components/layout/DynamicLayer";
import TasksContent from "@/components/layout/TasksContent";
import { WorkspaceTable } from "@/components/layout/WorkspaceTable";
import { cn } from "@/lib/utils";

const Tasks = ({ searchParams }) => {
  const params = searchParams
  const encryptedCommand = searchParams?.command;
  const decodedData = atob(encryptedCommand);
  const parsed = JSON.parse(decodedData);

  return (
    <>
      <div>
        <WorkspaceTable
          className={cn("hidden md:block col-span-12 row-span-2")}
        />

        <DynamicLayer>
          <TasksContent text={parsed.nombre+" soy un añadido"} params={params} />
        </DynamicLayer>
      </div>
    </>
  );
};

export default Tasks;
