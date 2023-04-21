import React from 'react';
import renderer from 'react-test-renderer';
import MissionButton from '../components/missionButton';

describe('MissionButton', () => {
  const onClickMock = jest.fn();

  it('renders correctly when not reserved', () => {
    const component = renderer.create(
      <MissionButton isReserved={false} onClick={onClickMock} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when reserved', () => {
    const component = renderer.create(
      <MissionButton isReserved onClick={onClickMock} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls the onClick function when clicked', () => {
    const component = renderer.create(
      <MissionButton isReserved={false} onClick={onClickMock} />,
    );
    const button = component.root.findByType('button');
    button.props.onClick();
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
