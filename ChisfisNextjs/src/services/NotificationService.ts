import { serverAuthAxios } from '@/utils/serverAxios';

export class NotificationService {
  get({ id } : { id: string}) {
    const uri = `/user/${{id}}`;
    return serverAuthAxios().get(uri)
  }
  list() {
    const uri = `/user/all`;
    return serverAuthAxios().get(uri)
  }
}
