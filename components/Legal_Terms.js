/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, ScrollView, Text, Dimensions, Image} from 'react-native';
import * as NavRef from '../NavRef/NavRef';
import Icon from 'react-native-vector-icons/EvilIcons';
const entireScreenWidth = Dimensions.get('window').width;
var rem = entireScreenWidth / 380;
class Legal_Terms extends Component {
  render() {
    const ltvn = `Các thương hiệu/nhãn hiệu dù đã đăng ký hay chưa đăng ký, tên, thiết kế, logo, v.v. được hiển thị trong chương trình này đều là tài sản trí tuệ của Công ty. Các nội dung bao hàm trong chương trình này là tài sản của Công ty.Chúng tôi bảo lưu mọi quyền sở hữu trí tuệ liên quan đến văn bản, đồ họa và các nội dung khác có trong chương trình. Mọi cập nhật, sao chép, phân phối, chuyển tiếp, xuất bản, chuyển nhượng toàn bộ hoặc một phần các nội dung đó hoặc bán cho bất kỳ mục đích thương mại nào đều bị nghiêm cấm.
Bạn bị cấm sử dụng các dịch vụ của chương trình này cho các mục đích bất hợp pháp. Bạn phải tuân thủ nghiêm ngặt các quy định của pháp luật có liên quan của đất nước bạn.
Bạn phải chịu trách nhiệm và phải bồi thường cho Công ty với mọi hình thức thiệt hại, mất mát và chi phí phát sinh do hành động không đúng mực trực tiếp hoặc gián tiếp của bạn thông qua chương trình nếu có bất cứ khiếu nại, khiêu kiện nào được đưa ra chống lại công ty. `;
    const lten = `The trademarks whether registered or unregistered, names, designs, logos, etc. displayed in this program are all intellectual property of the Company. The contents contained in this program are assets of the Company. We reserve all intellectual property rights in relation to the text, graphics and other contents contained in the programe. Any update, transcription, distribution, forwarding, publication, transfer of all or part of such content or sale for any commercial use is strictly prohibited.
You are prohibited from using the services of this program for illegal purposes. You are required to strictly abide by the related laws and legislations of your country.
If anyone makes a claim against the Company, you are liable and required to indemnify the Company against any form of damage, loss and expenses caused by your improper actions directly or indirectly through the program.`;
    const ltcn = `本程式內顯示的已註冊或未註冊商標，名稱，設計，標誌等均為本公司的知識產權。本程式內可供使用的內容均為本公司的財產。本公司保留一切有關該等內容的文字、圖表及其他內容的知識產權。該等內容的全部或部份的更新、抄錄、分發、轉遞、刊登、轉移或出售、或任何商業使用均嚴格禁止。
您絕不可使用本程式的服務作不合法的目的。您須嚴格遵守所在國家的有關的法律法規。
若任何人因您於本程式上或經由本程式所作的行為向本公司提出申索，您須對本公司遭受的與該申索相關的任何形式的損害、損失及支出彌償本公司。`;
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 11,
            margin: 10 * rem,
            padding: 3 * rem,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../image/UK.png')}
            style={{width: 40 * rem, height: 25 * rem}}
          />
          <View
            style={{
              flex: 11,
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                marginHorizontal: 5 * rem,
                fontSize: 15 * rem,
                fontWeight: 'bold',
              }}>
              Legal Terms (English Version)
            </Text>
            <ScrollView
              style={{
                marginHorizontal: 5 * rem,
              }}>
              <Text style={{fontSize: 12 * rem}}>{lten}</Text>
            </ScrollView>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: 'gainsboro'}} />
        <View
          style={{
            flex: 11,
            margin: 10 * rem,
            padding: 3 * rem,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../image/CN.png')}
            style={{width: 40 * rem, height: 25 * rem}}
          />
          <View
            style={{
              flex: 11,
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                marginHorizontal: 5 * rem,
                fontSize: 15 * rem,
                fontWeight: 'bold',
              }}>
              法律条款 (中文版本)
            </Text>
            <ScrollView
              style={{
                marginHorizontal: 5 * rem,
              }}>
              <Text style={{fontSize: 12 * rem}}>{ltcn}</Text>
            </ScrollView>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: 'gainsboro'}} />
        <View
          style={{
            flex: 11,
            margin: 10 * rem,
            padding: 3 * rem,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../image/VN.png')}
            style={{width: 40 * rem, height: 25 * rem}}
          />
          <View
            style={{
              flex: 11,
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                marginHorizontal: 5 * rem,
                fontSize: 15 * rem,
                fontWeight: 'bold',
              }}>
              Điều Khoản Pháp Lý (Phiên Bản Tiếng Việt)
            </Text>
            <ScrollView
              style={{
                marginHorizontal: 5 * rem,
              }}>
              <Text style={{fontSize: 12 * rem}}>{ltvn}</Text>
            </ScrollView>
          </View>
        </View>
        <View
          style={{
            flex: 3,
            backgroundColor: 'gainsboro',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            size={36 * rem}
            name="check"
            onPress={() => NavRef.navigate('LoginPage')}
          />
        </View>
      </View>
    );
  }
}
export default connect(state => {
  return {lang: state.lan};
})(Legal_Terms);
