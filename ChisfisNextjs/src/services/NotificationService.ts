import { clientAuthAxios } from "@/utils/clientAxios";

export class NotificationService {
  get({ id }: { id: string }) {
    const uri = `/user/${{ id }}`;
    return clientAuthAxios().get(uri);
  }
  list() {
    const uri = `/user/all`;
    return clientAuthAxios().get(uri);
  }
}
