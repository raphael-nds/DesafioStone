/* eslint-disable react/display-name */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */

export default (monetary: any) => {
   monetary = monetary.replace(/[^\d]/g, '')
   if (monetary.length > 0) {
      monetary = monetary.replace(/^(\d*)(\d{2})$/, '$1.$2')
   }

   while (monetary[0] === '0' && monetary[1] !== '.') {
      monetary = monetary.substring(1, monetary.length)
   }
   return ` ${monetary}`
}
