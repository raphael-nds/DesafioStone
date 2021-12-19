/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */

export default (porcentage: any) => {
   porcentage = porcentage.replace(/[^\d]/g, '')
   if (porcentage.length > 0) {
      porcentage = porcentage.replace(/^(\d*)(\d{2})$/, '$1.$2')
   }

   while (porcentage[0] === '0' && porcentage[1] !== '.') {
      porcentage = porcentage.substring(1, porcentage.length)
   }
   return `${porcentage}`
}
