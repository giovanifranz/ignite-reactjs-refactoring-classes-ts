import { useRef } from 'react'
import { FiCheckSquare } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Input, Modal } from '@/components'
import { Form } from './styles'

interface Props {
  isOpen: boolean
  setIsOpen: () => void
  handleUpdateFood: (data: AddFood) => void
  editingFood: IFood
}

function ModalEditFood({
  isOpen,
  setIsOpen,
  handleUpdateFood,
  editingFood
}: Props) {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = async (data: AddFood) => {
    handleUpdateFood(data)
    setIsOpen()
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  )
}

export { ModalEditFood }
export type { Props as ModalEditFoodProps }
