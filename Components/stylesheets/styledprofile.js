import styled from 'styled-components'

export const InputWrapper = styled.View`
    flex: 1;
    align-items: center;
    width: 100%;
    background-color: #2e64e515;
`;

export const InputField = styled.TextInput`
    background:#fff;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    paddingLeft:20
    width:75%;
    margin-bottom: 15px;
    borderRadius:80;
    `;

export const AddImage = styled.Image`
    width: 100%;
    height: 250px;
    margin-bottom: 15px;
`;

export const StatusWrapper = styled.View`
    justify-content: center;
    align-items: center;
`;

export const SubmitBtn = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    background-color: #2e64e515;
    border-radius: 5px;
    padding: 10px 25px;
    marginTop:10
`;

export const SubmitBtnText = styled.Text`
    font-size: 18px;
    font-family: 'sans-serif';
    font-weight: bold;
    color: #2e64e5;
`;