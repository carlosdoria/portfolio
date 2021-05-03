import * as S from './styles'

const CupCoffee = () => {
  return (
    <S.Container>
      <S.Plate></S.Plate>
      <S.Cup>
        <S.Top>
          <S.Vapour>
            <S.Mist value={17}/>
            <S.Mist value={1}/>
            <S.Mist value={20}/>
            <S.Mist value={2}/>
            <S.Mist value={5}/>
            <S.Mist value={15}/>
            <S.Mist value={7}/>
            <S.Mist value={14}/>
            <S.Mist value={4}/>
            <S.Mist value={10}/>
            <S.Mist value={13}/>
            <S.Mist value={8}/>
            <S.Mist value={19}/>
            <S.Mist value={3}/>
            <S.Mist value={11}/>
            <S.Mist value={16}/>
            <S.Mist value={12}/>
            <S.Mist value={9}/>
            <S.Mist value={6}/>
            <S.Mist value={18}/>
          </S.Vapour>
          <S.Circle>
            <S.Tea></S.Tea>
          </S.Circle>
        </S.Top>

        <S.Handle></S.Handle>
      </S.Cup>
    </S.Container>
  )
}

export default CupCoffee
