import moment from 'moment'
import 'moment/locale/zh-cn'
import enMessages from './en.json'
import cnMessages from './zh.json'
import antdCn from 'antd/lib/locale-provider/zh_CN'
import antdEn from 'antd/lib/locale-provider/en_US'
import appLocaleEn from 'react-intl/locale-data/en'
import appLocaleCn from 'react-intl/locale-data/zh'
import Storage from '../service/Storage'

export default {
    default: 'zh',
    zh: {
        locale: 'zh',
        antd: antdCn,
        moment: 'zh-cn',
        editor: 'zh-cn',
        data: appLocaleCn,
        messages: {
            ...cnMessages
        }
    },
    en: {
        locale: 'en',
        antd: antdEn,
        moment: 'en',
        editor: 'en',
        data: appLocaleEn,
        messages: {
            ...enMessages
        }
    },
    getLang() {
        const vm = this
        return Storage.getLocal('lang') || vm.default
    },
    getEditorLang() {
        const vm = this
        const lang = Storage.getLocal('lang') || vm.default
        return vm[lang].editor
    },
    getData() {
        const vm = this
        const lang = vm.getLang()
        moment.locale(vm[lang].moment)
        return vm[lang]
    },
    translate(key, data, lang) {
        const vm = this
        let result = vm[lang || vm.getLang()].messages[key]
        if (result) {
            if (data && typeof data === 'object') {
                if (data instanceof Array) {
                    data.forEach((item, index) => {
                        result = result.replace(`{${index}}`, item)
                    })
                } else {
                    Object.keys(data).forEach(item => {
                        result = result.replace(`{${item}}`, data[item])
                    })
                }
            }
            return result
        } else {
            return key
        }
    },
    hasRoute(route) {
        const vm = this
        if (vm[vm.getLang()].messages[route]) {
            return true
        } else {
            return false
        }
    }
}