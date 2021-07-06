import React, {useState, useEffect} from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  Alert,
  Modal,
  View,
  TextInput,
} from 'react-native';
import Button from '../../components/Button';
import TaskSelector from '../../components/TaskSelector';
import Logo from '../../components/Logo';
import Title from '../../components/Title';
import TaskCard from '../../components/TaskCard';
import {Container, TasksList} from './styles';

interface task {
  id: number;
  title: string;
  description: string;
  concluded: boolean;
}

const MyTasks: React.FC = () => {
  const [, updateState] = React.useState();

  const [list, setList] = useState<string>('TAREFAS');
  const [registeredTasks, setRegisteredTasks] = useState<task[]>([]);
  const [selectedList, setSelectedList] = useState<task[]>(registeredTasks);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = React.useState('');
  const [newTaskDescription, setNewTaskDescripion] = React.useState('');

  const forceUpdate = React.useCallback(() => updateState({}), []);
  const textInputStyles = {
    height: 60,
    width: 300,
    borderColor: '#000000',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  };

  useEffect(() => {
    forceUpdate();
  }, []);

  const handleAddNewTask = () => {
    setModalVisible(false);
    let newTask: task = {
      id: registeredTasks.length,
      title: newTaskTitle,
      description: newTaskDescription,
      concluded: false,
    };
    let allTasks = registeredTasks;
    allTasks.push(newTask);
    setRegisteredTasks(allTasks);
    forceUpdate();
    setNewTaskTitle('');
    setNewTaskDescripion('');
  };

  const handleShowAll = () => {
    setSelectedList(registeredTasks);
    setList('TAREFAS');
    forceUpdate();
  };

  const handleShowPending = () => {
    let pendingList = registeredTasks.filter(function (task) {
      return task.concluded === false;
    });
    setSelectedList(pendingList);
    setList('PENDENTES');
    forceUpdate();
  };

  const handleShowConcluded = () => {
    let concludedList = registeredTasks.filter(function (task) {
      return task.concluded === true;
    });
    setSelectedList(concludedList);
    setList('CONCLUÍDAS');
    forceUpdate();
  };

  const handleChangeTaskCompleteness = (item: task) => {
    let task = {
      id: item.item.id,
      title: item.item.title,
      description: item.item.description,
      concluded: !item.item.concluded,
    };
    let alteredTasks = registeredTasks;
    alteredTasks[item.item.id] = task;

    console.log(task);
    setRegisteredTasks(alteredTasks);
    setSelectedList(alteredTasks);
    forceUpdate();

    if (list === 'TAREFAS') {
      handleShowAll();
    } else if (list === 'PENDENTES') {
      handleShowPending();
    } else {
      handleShowConcluded();
    }
  };

  const handleDeleteTask = (item: task) => {
    let newTasks = registeredTasks.filter(function (task) {
      return task.id !== item.item.id;
    });
    //console.log(newTasks);
    setSelectedList(newTasks);
    setRegisteredTasks(newTasks);
    forceUpdate();
  };

  const showAlert = (item: task) =>
    Alert.alert(
      'EXCLUIR TAREFA',
      'Tem certeza que deseja deletar esta tarefa?',
      [
        {
          text: 'Cancelar',
          onPress: () => handleShowAll(),
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => handleDeleteTask(item),
        },
      ],
      {
        cancelable: true,
      },
    );

  const handleOpenModal = () => setModalVisible(true);

  const renderItem = (item: task) => (
    <TaskCard
      title={item.item.title}
      description={item.item.description}
      concluded={item.item.concluded}
      onPress={() => handleChangeTaskCompleteness(item)}
      exclude={() => showAlert(item)}
    />
  );
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <Modal
          animationType="slide"
          style={{}}
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Title>NOVA TAREFA</Title>
            <TextInput
              placeholder={'Título'}
              onChangeText={setNewTaskTitle}
              value={newTaskTitle}
              style={textInputStyles}
            />
            <TextInput
              placeholder={'Descrição'}
              onChangeText={setNewTaskDescripion}
              value={newTaskDescription}
              style={textInputStyles}
            />
            <View style={{alignItems: 'center'}}>
              <Button
                style={{backgroundColor: 'lightgreen', width: 150}}
                onPress={() => handleAddNewTask()}>
                ADICIONAR
              </Button>
              <Button
                style={{width: 120}}
                onPress={function () {
                  setModalVisible(false);
                  setNewTaskTitle('');
                  setNewTaskDescripion('');
                }}>
                Cancelar
              </Button>
            </View>
          </View>
        </Modal>
        <Container>
          <Title>{list}</Title>
          <TaskSelector>
            <Button
              onPress={() => {
                handleShowAll();
              }}>
              TAREFAS
            </Button>
            <Button
              onPress={() => {
                handleShowPending();
              }}>
              PENDENTES
            </Button>
            <Button
              onPress={() => {
                handleShowConcluded();
              }}>
              CONCLUÍDAS
            </Button>
          </TaskSelector>
          <TasksList
            data={selectedList}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
          <Button
            onPress={() => {
              handleOpenModal();
            }}>
            NOVA TAREFA
          </Button>

          <Logo />
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default MyTasks;
