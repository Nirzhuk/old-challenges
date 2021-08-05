import { Meta } from '@storybook/react';
import { Button } from 'components/CommonStyleds/Button';
import { useState } from 'react';

import ModalFullPage from '.';

export default {
    title: 'Modal',
    component: ModalFullPage,
    
} as Meta;


export const Modal = ()=> {
    const [open, setOpen] = useState(false)
   return (
           <>
           <Button onClick={()=>setOpen(!open)} label="Open modal"></Button>
           <ModalFullPage onClose={() => setOpen(false)}  isOpen={open}>Hello There</ModalFullPage>
           </>
   )
}
