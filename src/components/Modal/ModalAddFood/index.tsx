import { useRef } from 'react'
import { FiCheckSquare } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Input, Modal } from '@/components'
import { Form } from './styles'

interface Props {
  isOpen: boolean
  setIsOpen: () => void
  handleAddFood: (data: AddFood) => void
}

function ModalAddFood({ isOpen, setIsOpen, handleAddFood }: Props) {
  const handleSubmit = async (data: AddFood) => {
    handleAddFood(data)
    setIsOpen()
  }

  const formRef = useRef<FormHandles>(null)

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  )
}

export { ModalAddFood }
export type { Props as ModalAddFoodProps }
