import { QueryKey, useMutation,useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useSession } from './useSession';


interface MutateConfigs {
    headers?: Record<string, string>;
  }
  
  interface MutateParamsType<T> {
    baseUrl?: string
    endpoint: string;
    params?: Record<string, string>;
    queryParams?: Record<string, string>;
    body?: T;
    queryKey: QueryKey;
    config?: MutateConfigs;
  }
  
  // response type 
  interface RequestResponse<T> {
    action?:string;
    status:boolean;
    message:string;
    data:T | null
  }

export const useMutateData = <T>({
    baseUrl, endpoint, params, queryParams, body, config,queryKey,
}: MutateParamsType<T>) => {
      
     const { getSession } = useSession();
     const queryClient = useQueryClient();
      
        const mutateData = async () => {
            try {
                let url = (baseUrl || process.env.NEXT_PUBLIC_BACKEND_URL) + endpoint
                let query = '';
                // add query params to the endpoint
                if (queryParams) {
                    query = '?' + new URLSearchParams(queryParams).toString();
                    url += query;
                }
                // add params to the endpoint
                if (params) {
                    endpoint = endpoint.replace(/\/$/, '');
                    endpoint += '/' + Object.values(params).join('/');
                    url += query;
                }
                
                // remove double slashes using regex
                url = url.replace(/([^:]\/)\/+/g, "$1");
                const _config = {
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getSession()?.token}`
                    },
                    ...config
                };
         const response = await axios.post(url, body, _config);
          return response.data as RequestResponse<T>
        } catch (error: any) {
          console.log(error.response.data.data.error);
          return null;
        }finally{
          queryClient.invalidateQueries({queryKey:queryKey});
        }
     };
      
      return  useMutation({
        mutationFn: mutateData
     });
}

