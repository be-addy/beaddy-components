import Text from '../../base/Text';

const Date = Text.extend`
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
  color: ${(props: any) => props.highlight ? '#ffffff' : '#b7b3cc'};
`;

export default Date;