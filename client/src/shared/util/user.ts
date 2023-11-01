/*
   Удаление идентификатора у имени.
   expect: Oleg#3333
   result: Oleg
*/
export const convertName = (name: string | undefined) => name && name.slice(0, name?.length - 5);
