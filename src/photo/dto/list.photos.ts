export class ListPhotosDTO {
  constructor(readonly id: number, readonly title: string, readonly description: string, readonly filename: string, readonly authorname: string) {}
}