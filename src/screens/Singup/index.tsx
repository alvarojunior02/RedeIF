import React, { useState } from 'react';
import Header from '../../components/Header';
import ProfileSelector from '../../components/ProfileSelector';

import iconCalendar from '../../assets/icons/calendar.png';

import theme from '../../theme';

import {
    Container,
    Body,
    Title,
    Label,
    GenericInput,
    BiographyInput,
    BirthDateContainer,
    BirthDateInput,
    BirthDateIcon,
    ContainerStyledPicker,
    StyledPicker,
    AcceptTerms,
    CheckBox,
    LabelCheckBox,
    ButtonSingup,
    TextSingup,
} from './styles';

import { Masks } from 'react-native-mask-input';

const Singup = ({navigation}: any) => {
  const [profile, setProfile] = useState<string>('m1');
  const [email, setEmail] = useState<string>();
  const [fullname, setFullname] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [biography, setBiography] = useState<string>();

  const [selectedGender, setSelectedGender] = useState<string>('S');
  const genders = [
    {
      id: 0,
      label: 'Masculino',
      value: 'M',
    },
    {
      id: 1,
      label: 'Feminino',
      value: 'F',
    },
    {
      id: 2,
      label: 'Outro',
      value: 'O',
    },
  ]

  const [birthDate, setBirthDate] = useState<string>('');

  const [selectedCourse, setSelectedCourse] = useState<string>('Selecione');
  const courses = [
    'Secretariado Executivo',
    'Turismo',
    'Automação Industrial',
    'Engenharia de Controle e Automação',
    'Controle de Obras',
    'Construção de Edifícios',
    'Geoprocessamento',
    'Sistemas para Internet',
    'Redes de Computadores',
    'Engenharia da Computação',
    'Educação Física',
    'Engenharia Elétrica',
  ]

  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  const [checkBoxActive, setCheckBoxActive] = useState<boolean>(false);

  return (
    <>
        <Container>
            <Header navigation={navigation}/>

            <Body>
                <Title>Criar Conta</Title>

                <Label>Selecione um ícone *</Label>
                <ProfileSelector 
                  onUpdate={setProfile}
                  value={profile}
                />

                <Label>E-mail *</Label>
                <GenericInput 
                  value={email}
                  onChangeText={newEmail => setEmail(newEmail)}
                />

                <Label>Nome Completo *</Label>
                <GenericInput 
                  value={fullname}
                  onChangeText={newFullname => setFullname(newFullname)}
                />

                <Label>Usuário (seu @) *</Label>
                <GenericInput 
                  value={username}
                  onChangeText={newUsername => setUsername(newUsername)}
                />

                <Label>Biografia (opcional)</Label>
                <BiographyInput 
                  multiline={true}
                  numberOfLines={4}
                  value={biography}
                  onChangeText={newBiography => setBiography(newBiography)}
                  placeholder='Um pouco sobre você'
                />

                <Label>Gênero *</Label>
                <ContainerStyledPicker>
                  <StyledPicker
                    selectedValue={selectedGender}
                    onValueChange={(itemValue) => {
                      setSelectedGender(itemValue);
                    }}
                  >
                      <StyledPicker.Item label='Selecione' value='S'/>
                    {
                      genders.map((gender) => {
                        return (
                          <StyledPicker.Item 
                            key={gender.id}
                            label={gender.label}
                            value={gender.value}
                          />
                        )
                      })
                    }
                  </StyledPicker>
                </ContainerStyledPicker>

                <Label>Data de Nascimento *</Label>
                <BirthDateContainer>
                  <BirthDateInput 
                    keyboardType='numeric'
                    maxLength={10}
                    value={birthDate}
                    onChangeText={(masked) => {
                      setBirthDate(masked);
                    }}
                    mask={Masks.DATE_DDMMYYYY}
                  />
                  <BirthDateIcon source={iconCalendar}/>
                </BirthDateContainer>
                  

                <Label>Curso *</Label>
                <ContainerStyledPicker>
                  <StyledPicker
                    selectedValue={selectedCourse}
                    onValueChange={(itemValue) => {
                      setSelectedCourse(itemValue);
                    }}
                  >
                      <StyledPicker.Item label='Selecione' value='Selecione'/>
                    {
                      courses.map((course, index) => {
                        return (
                          <StyledPicker.Item 
                            key={index}
                            label={course}
                            value={course}
                          />
                        )
                      })
                    }
                  </StyledPicker>
                </ContainerStyledPicker>

                <Label>Senha *</Label>
                <GenericInput 
                  secureTextEntry={true}
                  value={password}
                  onChangeText={newPassword => setPassword(newPassword)}
                />

                <Label>Confirmar Senha *</Label>
                <GenericInput 
                  secureTextEntry={true}
                  value={confirmPassword}
                  onChangeText={newConfirmPassword => setConfirmPassword(newConfirmPassword)}
                />

                <AcceptTerms>
                  <CheckBox 
                      onPress={() => {setCheckBoxActive(!checkBoxActive)}}
                      style={{ backgroundColor: 
                          `${
                              checkBoxActive 
                                  ? theme.COLORS.GREEN_400
                                  : theme.COLORS.BACKGROUND
                          }` 
                      }}
                  />
                  <LabelCheckBox>Concordo com os termos e Política de Privacidade</LabelCheckBox>
                </AcceptTerms>

                <ButtonSingup>
                  <TextSingup>Criar Conta</TextSingup>
                </ButtonSingup>
            </Body>
        </Container>
    </>
  );
}

export default Singup;