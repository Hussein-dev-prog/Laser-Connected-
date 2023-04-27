import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-question-and-answer',
  templateUrl: './question-and-answer.component.html',
  styleUrls: ['./question-and-answer.component.css']
})
export class QuestionAndAnswerComponent {

  questions = [
    {
      title: [
        { titleName: 'كيفية التقديم على المنحة' },
        {
          subTitle: 'ماهي المنحة الجزئية',
          value: 'تتكفل الجمعية ب50 % من القسط السنوي ويتكفل الطالب بالباقي وبإمكان الطالب أن يدفع المبلغ المتوجب عليه فصلياً دفعة واحدة في بداية كل فصل أو يتم تقسيط المبلغ على دفعات شهرية'
        },
        {
          subTitle: 'ماهي مراحل التقديم على المنحة ؟',
          value: 'أن يقوم الطالب بتقديم الطلب عبر الإ نترنت يتم إجراء عملية إختيار أولية ثم إجراء مقابلات شخصية مع الطلاب ثم يتم الإعلان عن المقبولين النهائيين في المنحة'
        },
        {
          subTitle: 'متى تصدر نتائج المنحة ؟',
          value: ' تصدر نتائج المنحة الأولية في أواخر شهر أب'
        },
        {
          subTitle: 'متى يبدأ التسجيل في الجامعة ؟',
          value: 'يبدا التسجيل في الجامعة في اوائل شهر أيلول'
        },
        {
          subTitle: ' ماهي المستندات المطلوبة للطلاب المقبولين حديثاً في المنحة ؟',
          value: [
            { subValue: 'في حال تم قبول الطالب عليه تزويد الجمعية بنسخة عن :' },
            { subValue: 'صورة عن بطاقة الهوية' },
            { subValue: 'صورة عن شهادة البكلوريا' },
            { subValue: 'صورة شخصية' },
            { subValue: 'إفادة سكن' },
            { subValue: 'صورة عن شهادة البكلوريوس للدراسات العليا' },
            { subValue: 'قبول جامعي للدراسات العليا' }
          ]
        },
        { subTitle: '', value: '' }

      ]
    },
    {
      title: [
        { titleName: 'معايير القبول' },
        {
          subTitle: ' إذا كنت طالب مسجلً في الجامعة الشريكة هل يحق لي التقديم على المنحة ؟',
          value: 'يبلغ المقبولين عبر رسائل على الرقم الذي وضعته في الطلب او على هذا الموقع؟'
        },
        {
          subTitle: 'ذا كنت حاصلًا على شهادة جامعية هل يحق لي التقديم على المنحة بكالوريوس لدراسة فرع آخر ؟ماهي مراحل التقديم على المنحة ؟',
          value: 'نعم ، لا مانع من التقديم'
        },
        {
          subTitle: ' هل أستطيع التقديم لدراسة فرعين في آن واحد؟ متى تصدر نتائج المنحة ؟',
          value: 'كلا '
        },
        {
          subTitle: 'هل هناك عمر معين للطالب الذي يريد التقديم على المنحة ؟   متى يبدأ التسجيل في الجامعة ؟',
          value: 'كلا ، لا يوجد عمر معين'
        },
        {
          subTitle: 'هل يوجد منح كاملة ؟ ',
          value: 'كلا، لا يوجد منح كاملة ، كل المنح هذه السنة جزئية'
        },
        {
          subTitle: 'هل يجب أن أكون قد حصلت على شهادة البكلوريا حديثًا؟ ',
          value: 'كلا لا مانع ان تكون قد حصلت على شهادة البكلوريا في السنوات السابقة'
        },
      ]
    },
    {
      title: [
        { titleName: 'شروط المنحة' },
        {
          subTitle: 'هل تتجدد المنحة سنوياً ؟',
          value: 'المنحة تتجدد فصلياً في حال إستمرار الطالب بإستيفاء شروط المنحة'
        },
        {
          subTitle: 'متى تتوقف المنحة ؟',
          value: [
            { subValue: 'قد يتم إيقافها في حالات ثلاث:' },
            { subValue: 'رسوب الطالب في الفصل و الحصول على معدل يقل عن 80%' },
            { subValue: 'مستوى متدني من الحضور في الجامعة' },
            { subValue: 'اكتشاف استفادة من منحة أخرى في نفس الوقت' },
            { subValue: 'عدم الالتزام بالدفعات الشهرية المتفق عليها' },
          ]
        },
        {
          subTitle: 'ماذا يحصل عندما يتغير سعر صرف الدولار',
          value: 'الاقساط تكون حسب سعر الصرف الذي تعتمده الجامعة'
        }
      ]
    },
    {
      title: [
        { titleName: 'ما هي المنحة'},
        {
          subTitle: 'ما هي الاختصاصات التي تدعمها المنحة ؟',
          value: 'المنحة تشمل جميع الاختصاصات عدا الطب والصيدلة'
        },
        {
          subTitle: 'ما هي الجامعات التي تغطيها المنحة؟',
          value: [
            { subValue: 'المنحة تغطي الجامعات التالية:'},
            { subValue: 'جامعة العزم'},
            { subValue: 'جامعة المدينة (المنار سابقاً)' },
            { subValue: 'جامعة طرابلس'},
            { subValue: 'جامعة رفيق الحريري في المشرف' },
          ]
        },
        {
          subTitle: 'هل تشمل المنحة جميع المناطق اللبنانية ؟',
          value: 'كلا ، فقط طرابلس وصيدا وبيروت لان الجامعات الشريكة متواجدة فقط في هذه المناطق'
        },
        {
          subTitle: 'هل أدفع المبلغ دفعة واحدة ؟',
          value: 'بإمكانك دفع المبلغ دفعة واحدة في بداية كل فصل او تقسيطه على دفعات تدفع شهرياً'
        }
      ]
    },
    {
      title: [
        { titleName: 'الاختصاصات في الجامعات الشريكة'},
        {
          subTitle: 'ماهي الاختصاصات الموجودة في جامعة المدينة ؟',
          value: 'http://www.mut.edu.lb/academicsالرجاء زيارة الرابط التالي '
        },
        {
          subTitle: 'هل تشمل المنحة جميع المناطق اللبنانية ؟',
          value: 'كلا ، فقط طرابلس وصيدا وبيروت لان الجامعات الشريكة متواجدة فقط في هذه المناطق'
        },
        {
          subTitle: 'هل أدفع المبلغ دفعة واحدة ؟',
          value: 'بإمكانك دفع المبلغ دفعة واحدة في بداية كل فصل او تقسيطه على دفعات تدفع شهرياً'
        }
      ]
    },
    
  ]
  isTitleValueArray(title: any): boolean {
    return Array.isArray(title.value);
  }
  

  constructor(public translate: TranslationService) { }

}

