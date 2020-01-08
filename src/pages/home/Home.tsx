import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import {
  GeneralTemplate,
  Header,
  Footer,
  BotCard,
  AddCard,
  Modal,
  Input,
  Button,
  Tabs,
  Tab,
} from 'ui';

import './Home.less';

interface HomePageProps extends RouteComponentProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  const [visibleAddModal, setVisibleAddModal] = useState(false);
  const handleClickAdd = () => {
    setVisibleAddModal(true);
  };
  const handleHideAdd = () => {
    setVisibleAddModal(false);
  };
  return (
    <GeneralTemplate
      header={
        <Header
          avatar="https://sun9-23.userapi.com/c855428/v855428321/116aa2/uqyf9qbT5bI.jpg?ava=1"
          name="Alexey"
        />
      }
      footer={<Footer />}
    >
      <div className="bf-home-page__container">
        <div className="bf-home-page__tabs">
          <Tabs selectedKey="bots">
            <Tab key="bots" title="🕹️ Bots">
              <div className="bf-home-page__cards-bot">
                <AddCard
                  onClick={handleClickAdd}
                  className="bf-home-page__card"
                  title="Add bot"
                />
                <BotCard
                  className="bf-home-page__card"
                  to={`bot/${1}`}
                  data={{ id: 0, title: 'Techvice', description: 'foods' }}
                  active
                />
                <BotCard
                  className="bf-home-page__card"
                  to={`bot/${2}`}
                  data={{ id: 0, title: 'Techvice', description: 'test-food' }}
                />
              </div>
            </Tab>
            <Tab key="foods" title="🍔 Foods">
              <div className="bf-home-page__cards-bot">
                <AddCard
                  onClick={handleClickAdd}
                  className="bf-home-page__card"
                  title="Add food"
                />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <Modal
        title="Создать бота"
        visible={visibleAddModal}
        onClose={handleHideAdd}
      >
        <Input />
        <Button priority="primary">Add bot</Button>
      </Modal>
    </GeneralTemplate>
  );
};
