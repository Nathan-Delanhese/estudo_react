import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from '../NewTransactionsModal/styles';
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface PropsNewTransitionModal {
    isOpen: boolean;
    onRequestClose: () => void;
}


const NewTransitionModal = ({ isOpen, onRequestClose }: PropsNewTransitionModal) => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            title, value, category, type
        };

        api.post('transactions', data)

    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="reac-modal-overlay"
            className="react-modal-content"
        >

            <button type='button' onClick={onRequestClose} className="react-modal-close"><img src={closeImg} alt="Close" /></button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input placeholder='Título' value={title} onChange={event => setTitle(event.target.value)} />
                <input placeholder='Valor' value={value} onChange={event => setValue(Number(event.target.value))} type="number" />

                <TransactionTypeContainer>
                    <RadioBox type="button"
                        isActive={type === 'deposit'}
                        activeColor="green"
                        onClick={() => { setType('deposit'); }}
                    >
                        <img src={incomeImage}
                            alt="Entrada"
                        />
                        <span>Entrada</span>
                    </RadioBox>


                    <RadioBox type="button"
                        isActive={type === 'withdraw'}
                        activeColor="red"
                        onClick={() => { setType('withdraw') }}
                    >
                        <img src={outcomeImage}
                            alt="Saida" />
                        <span>Saída</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input placeholder='Categoria' value={category} onChange={event => setCategory(event.target.value)} />
                <button type='submit'>Cadastrar</button>
            </Container>
        </Modal>
    );

}

export default NewTransitionModal;