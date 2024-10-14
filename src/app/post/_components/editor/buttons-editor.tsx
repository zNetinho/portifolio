import ButtonComponent from '@/components/button'
import { SaveIcon, XIcon } from 'lucide-react'
import React from 'react'

type buttonProps = {
    action: () => Promise<void>
}

function ButtonsEditor({action}: buttonProps) {
  return (
    <div className="flex justify-end gap-2 pt-2">
    <ButtonComponent 
      className="flex gap-1 p-1 border-[1px] rounded-md bg-green-700"
      onClick={action}
      onMouseDown={e => e.preventDefault()}
    >
        Salvar <SaveIcon />
    </ButtonComponent>
    <ButtonComponent 
      className="flex gap-1 p-1 border-[1px] rounded-md bg-red-800"
      type="reset"
    >
        Cancelar <XIcon />
    </ButtonComponent>
</div>
  )
}

export default ButtonsEditor