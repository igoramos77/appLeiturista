import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList } from 'react-native';

import Button from '../../Componets/Forms/Button';

import categories from "../../utils/situationsList";

import {
  Container,
  Header,
  Title,
  Category,
  Name,
  Separator,
  Footer,
} from './styles';
import axios from 'axios';
import baseURL from '../../services/baseURL';
import { useAuth } from '../../hooks/auth';

interface Category {
  value: number | string;
  display: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({category, setCategory, closeSelectCategory} : Props ){
  const { user } = useAuth();
  //const [categories, setCategories] = useState<Category>({} as Category);

  function handleCategorySelect(category: Category){
    setCategory(category);
  }

  useFocusEffect(
    useCallback(() => {
      async function loadData() {
        try {
          const response = await axios.get(`${baseURL}/chaining/filter/summa/CategoriaAtividadeComplementar/curso/summa/AtividadeComplementar/categoria/${user.curso}/`);
          console.log(response.data);
          //setCategories(response.data);
        } catch (error: any) {
          console.log(error.response);
        }
      }
      loadData();
    }, [])
  );

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%'}}
        keyExtractor={(item: Category) => String(item.value)}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.value === item.value}
          >
            <Name>{item.display}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button
          background="primary"
          title="Selecionar Categoria"
          onPress={closeSelectCategory}
        />
      </Footer>
    </Container>
  )
}