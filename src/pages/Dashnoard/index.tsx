import React, { useState } from 'react';

import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashnoard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 6</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/33437900?s=460&u=9a5b11f728c38a7afb023b7ea2ee9e03ed262dc5&v=4"
                alt="Joel Modesto"
              />

              <strong>Joel Modesto</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/33437900?s=460&u=9a5b11f728c38a7afb023b7ea2ee9e03ed262dc5&v=4"
                  alt="Joel Modesto"
                />

                <strong>Joel Modesto</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/33437900?s=460&u=9a5b11f728c38a7afb023b7ea2ee9e03ed262dc5&v=4"
                  alt="Joel Modesto"
                />

                <strong>Joel Modesto</strong>
              </div>
            </Appointment>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/33437900?s=460&u=9a5b11f728c38a7afb023b7ea2ee9e03ed262dc5&v=4"
                  alt="Joel Modesto"
                />

                <strong>Joel Modesto</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashnoard;
