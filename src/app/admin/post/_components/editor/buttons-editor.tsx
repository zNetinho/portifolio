import { SaveIcon, XIcon } from 'lucide-react'

type buttonProps = {
    action: () => Promise<void>
}

function ButtonsEditor({action}: buttonProps) {
  return (
    <div className="flex justify-end gap-2 pt-2">
    <button
      className="flex gap-1 p-1 border-[1px] rounded-md bg-green-700"
      onClick={() => action()}
    >
        Salvar <SaveIcon />
    </button >
    <button 
      className="flex gap-1 p-1 border-[1px] rounded-md bg-red-800"
      type="reset"
    >
        Cancelar <XIcon />
    </button>
</div>
  )
}

export default ButtonsEditor