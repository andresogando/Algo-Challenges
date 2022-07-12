import { renderItemList } from "@hooks/user";
import { useUser } from "@hooks/user";

export default function Tenant() {
  const { user, isError, isLoading } = useUser();
  console.log(user)

  
  if (isLoading) return <div>Loading . . . </div>;
  if (isError) return <div>{isError}</div>;
  return (
      <div>
          <div> hola </div>
      <div id="params">{renderItemList(user)}</div>
    </div>
  );
}
