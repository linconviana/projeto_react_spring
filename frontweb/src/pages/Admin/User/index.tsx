import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { User } from "types/user";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/requests";

const Users = () => {
  const [page, setPage] = useState<SpringPage<User>>();

  useEffect(() => {
    //parametros da url
    const params: AxiosRequestConfig = {
      withCredentials: true,
      url: '/users',
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
  }, []);

  return (
        <div>
            {page?.content.map((item) => {
                return <p key={item.id}>{item.email}</p>
            })}
        </div>
    );
};

export default Users;
