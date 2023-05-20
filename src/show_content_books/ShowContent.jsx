import React from "react";
import { Link } from "react-router-dom";
import '../show_content_books/Show_Conten.css';
const ShowContent = () => {
  return (
    <div>
      <section className="show_content_nav">
        <div className="left_page">
          <Link><button className="next_page"><i class="fas fa-angle-left"></i>پچھلا صفحہ</button></Link>
          <p>باب:عقیدہ ختم نبوت اور قرآن مجید کا اسلوب بیان</p>
        </div>
        <div className="left_page">
          <button>
            <span>1/</span>
            <input type="number" name="" id="" />
          </button>
          <Link><button className="next_page"><i class="fas fa-angle-right"></i> اگلا صفحہ</button></Link>
        </div>
      </section>
      <section className="books">
      <div className="books_content">
        <div className="books_content_page_and_num">
          <p className="books_content_page">1</p>
          <h4>مختصرا ہمارے بارےمیں</h4>
        </div>
                    <h1>مختصرا ہمارے بارےمیں</h1>
                    <p>
                        یہ ویب سائٹ ایک اسلامی کتابوں کی لائبریری کے طور پر ترتیب دی گئی ہے،
                                    جہاں لوگ اپنی مقبول اسلامی کتابوں کو ایڈیٹ کر سکتے ہیں۔اس ویب سائٹ
                                    کا مقصد اسلامی تعلیمات کو فراہم کرنا اور لوگوں کو ان کی فہم میں مدد
                                    کرنا ہے۔
                    </p>
                    <p>
                        اس ویب سائٹ پر کتابوں کی مختلف شناختی وضاحتیں موجود ہیں، جس میں ختم
                                    نبوت، اسلامی تعلیمات، تاریخ، سیرت، فقہ، حدیث، تفسیر، تصوف شامل ہیں۔
                                    اس ویب سائٹ پر شناختی وضاحتیں اس طرح سے کی جاتی ہیں کہ کتابوں کے
                                    عنوان، مصنفین، اور ناشرین کے ساتھ متعلق معلومات بھی شامل ہیں۔
                    </p>
                    <p>
                        اس ویب سائٹ پر کتابوں کی فہرست بھی دستیاب ہے جس میں کتابوں کے عنوان
                                    کے حروفِ تہجی کے لحاظ سے ترتیب دیا گیا ہے۔ اس فہرست کے ذریعے، کسی
                                    بھی کتاب کی تلاش کرنا بہت آسان ہو جاتا ہے۔
                    </p>
                    <p>
                        اس ویب سائٹ کی سب سے بڑی خصوصیت اس کے ادارہ و ترتیب دینے کا طریقہ
                                    ہے۔ اس ویب سائٹ کی وسیع لائبریری، جو کہ انٹرنیٹ کے ذریعے دستیاب ہے،
                                    اپنے کسی بھی کتاب کو آسانی سے جاری رکھنے کی اجازت دیتی ہے۔ اس کے
                                    علاوہ، لوگ ان کتابوں کے متعلق اپنے خیالات کو بھی شیئر کرسکتے ہیں۔
                    </p>
                    <p>
                        یہ ویب سائٹ ایک ایسی جگہ ہے جہاں مختلف سوالات کے جوابات بھی دستیاب
                                    ہیں۔ اس ویب سائٹ پر موجود مواد مختلف زبانوں میں دستیاب ہیں، جو کہ اس
                                    میں دستیاب کتابوں کے متعلق معلومات، تفسیرات، وظائف، تصاویر، تصاویر،
                                    ویڈیو، آڈیو وغیرہ شامل ہیں۔
                    </p>
                    <p>
                        ویب سائٹ اسلامی کتابوں کی دنیا کو آپس میں جوڑنے والی ایک محفل ہے۔ اس
                                    ویب سائٹ کی مدد سے لوگ اپنے دین کے بارے میں بہت کچھ سیکھ سکتے ہیں
                                    اور اسے مزید بہترین بنانے کیلئے تلاش کر سکتے ہیں۔ اس کے علاوہ، یہ
                                    ویب سائٹ ان لوگوں کیلئے بھی بہت فائدہ مند ہے جو اپنے اسلامی علم کو
                                    بڑھانا چاہتے ہیں۔
                    </p>
                    <p>
                        اس ویب سائٹ کا تعارف کرنا مکمل نہیں ہوتا جب تک آپ اس پر گھستی کر کے
                                    اپنے خود کے لئے ایک اکاؤنٹ نہیں بناتے۔ ایک بار جب آپ ایک اکاؤنٹ بنا
                                    دیتے ہیں، تو آپ ویب سائٹ پر کتابیں اپ لوڈ کر سکتے ہیں، انہیں اپ ڈیٹ
                                    کر سکتے ہیں، اور انہیں حذف کر سکتے ہیں۔ اس ویب سائٹ کے ساتھ آپ بلا
                                    شبہ ایک سفر کرنے کو تیار ہوں گے جہاں آپ کے لئے بہت سے سیکھنے اور
                                    شیئر کرنے کے لئے کچھ نیا ہوگا۔
                    </p>
                </div>
      </section>
    </div>
  )
}

export default ShowContent