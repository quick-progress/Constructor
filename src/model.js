import image from './assets/banner_site_edit.png'
import {TitleBlock, TextBlock, ImageBlock, TextColumnsBlock} from './classes/bloсks'

export const model = [
    new TitleBlock('Разработка сайта под ключ', {
        styles: 'background: #c6d1ff; color: #000; text-align: center; padding-bottom: 10px;',
        tag: 'h2'
    }),
    new TextBlock('Разработаю сайт под Ваши требования, операясь на Ваши желания и свой немалый опыт в Веб-разработке. Результат Вас удивит!', {
        styles: 'display: block; background: #c6d1ff;color: #000; text-align: center; margin-bottom :30px; padding-bottom: 5px;'
    }),
    new ImageBlock(image, {
        styles: 'display: block; margin: 0 auto;',
        alt: 'Сайты под ключ',
        stylesImage: 'width: 100%;'
    }),
    new TextColumnsBlock([
        'Короткие сроки разработки и высокое качество проекта - это один из наших главных принципов работы',
        'Поддержка сайта 30 дней со дня передачи доступа. Исправим, скорректируем, расскажем!',
        'Удобная админ-панель для работы с Вашим сайтом, не придется каждый раз обращаться к программисту',
        'Долгосрочное сотрудничество и всесторонняя поддержка на всех этапах разработки'
    ], {
        styles: 'text-align: center; color: #151729;'
    })
]