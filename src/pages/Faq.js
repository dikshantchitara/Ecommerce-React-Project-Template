import React from 'react';
import './faq.css'
import Footer from './Footer';

export default function Faq() {
    return (
        <><div className="wrapper">
        <input
          type="radio"
          id="Faq-question1"
          name="accordion"
          checked="checked" />
        <label className="item" for="Faq-question1">
          <div className="main-title">
            <h1>General</h1>
          </div>
          <div className="title">
            What designer fragrances does Stylerule offer?
          </div>
          <div className="content">
            Stylerule offers a curated selection of designer fragrances from
            renowned brands like Monique Lhuillier, Rebecca Minkoff, Rachel
            Zoe, Derek Lam 10 Crosby, and Monotheme.
          </div>
        </label>
        <input type="radio" id="Faq-question2 " name="accordion" />
        <label className="item" for="Faq-question2 ">
          <div className="title">Are these fragrances for men or women?</div>
          <div className="content">
            The selection varies. Monique Lhuillier offers women's wedding
            perfume. Rebecca Minkoff, Rachel Zoe, and Derek Lam 10 Crosby have
            fragrances for women. Monotheme offers fragrances for both men and
            women.
          </div>
        </label>
        <input type="radio" id="Faq-question3" name="accordion" />
        <label className="item" for="Faq-question3">
          <div className="title">
            How do I choose the right designer fragrance?
          </div>
          <div className="content">
            Consider your preferred scent profile (floral, musky, woody, etc.)
            and the occasion (daytime, evening, special event). Explore our
            fragrance descriptions to find out what resonates with you.
          </div>
        </label>
        <input type="radio" id="Faq-question4" name="accordion" />
        <label className="item" for="Faq-question4">
          <div className="title">How do I choose a fragrance that suits me?</div>
          <div className="content">
            Consider your preferred scent profile. Do you gravitate towards
            floral, musky, woody, citrusy, fresh, or oriental scents? Explore
            fragrance descriptions that mention these notes.
          </div>
        </label>
        <input type="radio" id="Faq-question5" name="accordion" />
        <label className="item" for="Faq-question5">
          <div className="title">
            What's the difference between Eau de Toilette (EDT) and Eau de
            Parfum (EDP)?
          </div>
          <div className="content">
            EDT has a lower concentration of perfume oil (5-15%) and lasts for
            a shorter duration. EDP has a higher concentration (15-25%) and
            offers a longer-lasting fragrance.
          </div>
        </label>

        <input type="radio" id="Faq-question6" name="accordion" />
        <label className="item" for="Faq-question6">
          <div className="title">Where should I apply perfume?</div>
          <div className="content">
            Apply perfume to pulse points like the wrists, inner elbows, neck,
            and behind the ears. These areas generate warmth, which helps
            diffuse the fragrance.
          </div>
        </label>
        <input type="radio" id="Faq-question7" name="accordion" />
        <label className="item" for="Faq-question7">
          <div className="title">How much perfume should I spray?</div>
          <div className="content">
            Less is more! A few spritzes are enough. Avoid over-applying,
            which can overwhelm you and others.
          </div>
        </label>
        <input type="radio" id="Faq-question8" name="accordion" />
        <label className="item" for="Faq-question8">
          <div className="title">How can I make my perfume last longer?</div>
          <div className="content">
            Apply perfume to moisturized skin. Lotion creates a base that
            helps the fragrance to stay longer. Apply petroleum jelly to pulse
            points before spraying for a long-lasting scent.
          </div>
        </label>
        <input type="radio" id="Faq-question9" name="accordion" />
        <label className="item" for="Faq-question9">
          <div className="title">
            Are designer fragrances worth the investment?
          </div>
          <div className="content">
            Designer fragrances can be worth the investment if you appreciate
            high-quality ingredients, unique scent profiles, and beautiful
            packaging. However, there are many factors to consider. The cost
            per quantity can be higher compared to other options. Explore what
            matters most to you in a fragrance before deciding.
          </div>
        </label>
        <input type="radio" id="Faq-question10" name="accordion" />
        <label className="item" for="Faq-question10">
          <div className="title">
            What are some good alternatives to designer fragrances? There are
            several alternatives to consider:
          </div>
          <div className="content">
            <b>Eau de Toilette (EDT) vs. Eau de Parfum (EDP):</b> EDPs are
            more concentrated and last longer. Choosing an EDP from a
            non-designer brand might offer a similar experience at a lower
            price point. <br />
            <b>Celebrity fragrances:</b> These fragrances are often more
            affordable than designer brands and can offer interesting and
            unique scents. <br />
            <b>Niche fragrances:</b> Smaller, independent perfumers often
            create unique and long-lasting fragrances at a mid-range price
            point.
          </div>
        </label>
        <input type="radio" id="Faq-question11" name="accordion" />
        <label className="item" for="Faq-question11">
          <div className="title">
            How can I store my perfume properly to maintain its quality?
          </div>
          <div className="content">
            Store your perfume in a cool, dark place away from direct sunlight
            and heat. Avoid storing in the bathroom due to humidity
            fluctuations. Keep the original packaging, especially the box, for
            optimal storage.
          </div>
        </label>
        <input type="radio" id="Faq-question12" name="accordion" />
        <label className="item" for="Faq-question12">
          <div className="title">
            Is it okay to layer different fragrances? If so, how? Layering
            fragrances can create a unique and personalized scent. Here are
            some tips:
          </div>
          <div className="content">
            <b> Start with lighter scents:</b> Apply a lotion or body spray
            with a desired scent as a base. <br />
            <b> Layer a complementary Eau de Toilette:</b> Choose an EDT that
            enhances the base scent without overpowering it. Citrusy or fresh
            scents often layer well with others. <br />
            <b> Finish with Eau de Parfum:</b> Apply the final spritz of EDP
            to complete the layered effect. Choose an EDP that complements the
            base and EDT notes.
          </div>
        </label>
        <input type="radio" id="Faq-question13" name="accordion" />
        <label className="item" for="Faq-question13">
          <div className="title">
            What are some common fragrance etiquette mistakes to avoid?
          </div>
          <div className="content">
            <b>Over-applying:</b> A few spritzes are enough. Too much
            fragrance can be overpowering for yourself and others. <br />
            <b> Not considering the occasion:</b> Strong fragrances might be
            better suited for evenings, while lighter scents work well for
            daytime wear. <br />
            <b> Applying directly to clothes:</b> Fragrances can stain
            delicate fabrics. Apply to pulse points on your body instead.{" "}
            <br />
            <b> Not storing perfume properly:</b> Heat, light, and humidity
            can degrade your fragrance. Store it properly to maintain its
            quality.
            <br />
            <b>
              {" "}
              Not respecting other people's fragrance sensitivities:
            </b>{" "}
            Some people have allergies or sensitivities. Be mindful of strong
            scents in close quarters.
          </div>
        </label>
        <input type="radio" id="Faq-question14" name="accordion" />
        <label className="item" for="Faq-question14">
          <div className="main-title">
            <h1>Monique Lhuillier</h1>
          </div>
          <div className="title">
            What kind of scent does the Monique Lhuillier fragrance have?
          </div>
          <div className="content">
            Monique Lhuillier offers a luxurious women's fragrance with
            floral, musky, woody, aromatic, and fresh spicy notes.
          </div>
        </label>
        <input type="radio" id="Faq-question15" name="accordion" />
        <label className="item" for="Faq-question15">
          <div className="title">
            Is the Monique Lhuillier fragrance suitable for everyday wear?
          </div>
          <div className="content">
            The fragrance profile suggests it might be more suited for special
            occasions like weddings due to its complex notes.
          </div>
        </label>
        <input type="radio" id="Faq-question16" name="accordion" />
        <label className="item" for="Faq-question16">
          <div className="main-title">
            <h1>Rebecca Minkoff</h1>
          </div>
          <div className="title">
            What are the key fragrance notes of the Rebecca Minkoff Eau de
            Parfum? The Rebecca Minkoff Eau de Parfum offers a captivating
            blend of notes throughout its development:
          </div>
          <div className="content">
            <b>Top notes:</b> Cardamom, Coriander, and Bergamot - These create
            an initial aromatic and refreshing impression. <br />
            <b>Heart notes:</b> Tobacco, Jasmine, and Amyl Salicylate - This
            floral and fruity aroma adds a touch of confidence and sweetness.
            <br />
            <b>Base notes:</b> Tonka Bean, Leather, Patchouli, and Labdanum -
            The base provides a musky and long-lasting impression, promoting
            feelings of attraction and refreshment.
          </div>
        </label>
        <input type="radio" id="Faq-question17" name="accordion" />
        <label className="item" for="Faq-question17">
          <div className="title">
            Whom is the Rebecca Minkoff Eau de Parfum designed for?
          </div>
          <div className="content">
            This fragrance is crafted for the woman who embodies elegance,
            charm, and a touch of fearless confidence. It caters to a
            contemporary and urban woman who desires a scent that reflects her
            unique personality.
          </div>
        </label>
        <input type="radio" id="Faq-question18" name="accordion" />
        <label className="item" for="Faq-question18">
          <div className="main-title">
            <h1>Rachel Zoe</h1>
          </div>
          <div className="title">What fragrances does Rachel Zoe offer?</div>
          <div className="content">
            Rachel Zoe offers a range of women's fragrances named Warrior,
            Instinct, Fearless, and Empowered, each available in mist
            versions.
          </div>
        </label>
        <input type="radio" id="Faq-question19" name="accordion" />
        <label className="item" for="Faq-question19">
          <div className="title">
            What does the "Warrior" fragrance by Rachel Zoe smell like?
          </div>
          <div className="content">
            Warrior is an amber floral fragrance with notes of patchouli,
            cacao, and rose, designed to represent strength.
          </div>
        </label>
        <input type="radio" id="Faq-question20" name="accordion" />
        <label className="item" for="Faq-question20">
          <div className="title">
            What is the difference between "Warrior" and "Warrior Mist"?
          </div>
          <div className="content">
            Both share the same fragrance, but "Warrior Mist" is a lighter
            body mist format.
          </div>
        </label>
        <input type="radio" id="Faq-question21" name="accordion" />
        <label className="item" for="Faq-question21">
          <div className="title">
            Are there any Rachel Zoe fragrances with a more citrusy scent?
          </div>
          <div className="content">
            Yes, "Instinct" by Rachel Zoe is a floral, musky, citrus, and
            powdery fragrance.
          </div>
        </label>
        <input type="radio" id="Faq-question22" name="accordion" />
        <label className="item" for="Faq-question22">
          <div className="title">
            What is the best Rachel Zoe fragrance for a confident woman?
          </div>
          <div className="content">
            Consider "Fearless" with amber vanilla and creamy coconut notes,
            or "Empowered" with a lactonic, coconut, and vanilla fragrance.
          </div>
        </label>
        <input type="radio" id="Faq-question23" name="accordion" />
        <label className="item" for="Faq-question23">
          <div className="main-title">
            <h1>Derek Lam 10 Crosby</h1>
          </div>
          <div className="title">
            What kind of fragrances does Derek Lam 10 Crosby offer?
          </div>
          <div className="content">
            Derek Lam 10 Crosby offers a variety of women's fragrances with
            diverse profiles, including floral fruity, clean musk, refreshing
            citrus, and rich amber.
          </div>
        </label>
        <input type="radio" id="Faq-question24" name="accordion" />
        <label className="item" for="Faq-question24">
          <div className="title">
            What is Derek Lam 10 Crosby's "Drunk on Youth" fragrance like?
          </div>
          <div className="content">
            It's a casual and refreshing floral-fruity fragrance with notes of
            apple and honeysuckle.
          </div>
        </label>
        <input type="radio" id="Faq-question25" name="accordion" />
        <label className="item" for="Faq-question25">
          <div className="title">
            Does Derek Lam 10 Crosby have any clean and light fragrances?
          </div>
          <div className="content">
            Yes, "Silent St." offers a clean and soft fragrance with white
            musk and floral notes.
          </div>
        </label>
        <input type="radio" id="Faq-question26" name="accordion" />
        <label className="item" for="Faq-question26">
          <div className="title">
            What fragrance by Derek Lam 10 Crosby is best for rainy days?
          </div>
          <div className="content">
            "Rain Day" is a refreshing fragrance with citrus, floral, and
            green notes, perfect for a rainy day pick-me-up.
          </div>
        </label>
        <input type="radio" id="Faq-question27" name="accordion" />
        <label className="item" for="Faq-question27">
          <div className="title">
            Are any Derek Lam 10 Crosby fragrances suitable for evening wear?
          </div>
          <div className="content">
            Yes, consider "Blackout" with its unique amber and spicy notes or
            "2 AM Kiss" for a rich amber and caramel aroma.
          </div>
        </label>
        <input type="radio" id="Faq-question28" name="accordion" />
        <label className="item" for="Faq-question28">
          <div className="main-title">
            <h1>Monotheme</h1>
          </div>
          <div className="title">What is Monotheme all about?</div>
          <div className="content">
            Monotheme Venezia offers a unique concept in fragrances; each
            perfume centers around a single hero ingredient. This allows you
            to experience the full depth and character of notes like saffron,
            rose oud, or cherry blossom.
          </div>
        </label>
        <input type="radio" id="Faq-question29" name="accordion" />
        <label className="item" for="Faq-question29">
          <div className="title">Are Monotheme fragrances unisex?</div>
          <div className="content">
            Yes, a majority of Monotheme fragrances are designed to be unisex.
            The focus on singular notes creates scents that can be enjoyed by
            both men and women.
          </div>
        </label>
        <input type="radio" id="Faq-question30" name="accordion" />
        <label className="item" for="Faq-question30">
          <div className="title">
            What kind of fragrances does Monotheme offer?
          </div>
          <div className="content">
            Monotheme offers a variety of fragrance profiles. You'll find
            spicy scents like Saffron, earthy notes with Patchouli Leaves,
            fresh florals like Cherry Blossom, and rich orientals with Black
            Oud.
          </div>
        </label>
        <input type="radio" id="Faq-question31" name="accordion" />
        <label className="item" for="Faq-question31">
          <div className="title">
            I like strong, long-lasting fragrances. Does Monotheme have
            anything for me?
          </div>
          <div className="content">
            Absolutely! Monotheme fragrances are known for their good
            longevity. Scents like Black Oud and Saffron pack a powerful
            punch, while Vetiver Bourbon offers a woody aromatic experience
            that lasts.
          </div>
        </label>
        <input type="radio" id="Faq-question32" name="accordion" />
        <label className="item" for="Faq-question32">
          <div className="title">
            What is the best Monotheme fragrance for a confident woman?
          </div>
          <div className="content">
            Several Monotheme fragrances can boost confidence. The spicy
            warmth of Saffron or the rich amber floral notes of Rouge are
            excellent choices.
          </div>
        </label>
        <input type="radio" id="Faq-question33" name="accordion" />
        <label className="item" for="Faq-question33">
          <div className="title">
            Are there any Monotheme fragrances with refreshing citrus notes?
          </div>
          <div className="content">
            Yes! Look for fragrances like Bloom or Camelia with citrusy top
            notes that provide an uplifting and invigorating scent.
          </div>
        </label>
        <input type="radio" id="Faq-question34" name="accordion" />
        <label className="item" for="Faq-question34">
          <div className="title">How should I apply Monotheme fragrances?</div>
          <div className="content">
            Apply Monotheme fragrances to your pulse points, like your wrists,
            inner elbows, neck, and behind the ears. These areas generate
            warmth, which helps to diffuse the scent.
          </div>
        </label>
        <input type="radio" id="Faq-question35" name="accordion" />
        <label className="item" for="Faq-question35">
          <div className="title">
            How can I make my Monotheme fragrance last longer?
          </div>
          <div className="content">
            Moisturize your skin before applying perfume. Lotion creates a
            base that helps the fragrance adhere better. You can also store
            your Monotheme fragrance in a cool, dark place away from direct
            sunlight and heat to preserve its quality.
          </div>
        </label>
        <input type="radio" id="Faq-question36" name="accordion" />
        <label className="item" for="Faq-question36">
          <div className="title">
            What are some other things to consider when choosing a Monotheme
            fragrance?
          </div>
          <div className="content">
            Think about the occasion and the mood you want to create. For
            daytime wear, a lighter floral scent like Cherry Blossom might be
            ideal. For a night out, a richer fragrance like Black Oud could be
            a good option.
          </div>
        </label>
        <input type="radio" id="Faq-question37" name="accordion" />
        <label className="item" for="Faq-question37">
          <div className="title">Are Monotheme fragrances a good gift?</div>
          <div className="content">
            Monotheme fragrances make fantastic gifts! With their unique
            concept and high quality, they're a thoughtful present for someone
            who appreciates distinctive scents.
          </div>
        </label>
        <input type="radio" id="Faq-question38" name="accordion" />
        <label className="item" for="Faq-question38">
          <div className="main-title">
            <h1>Mayan Magic Mud</h1>
          </div>
          <div className="title">
            What are the benefits of using Mayan Magic Mud? Mayan Magic Mud is
            a deep pore cleansing face mask formulated with Bentonite Clay, a
            natural ingredient known for its various benefits:
          </div>
          <div className="content">
            <b>Brightening and Cleansing:</b> It helps remove dirt and
            impurities from pores, promoting a brighter and more youthful
            complexion. <br />
            <b> Acne Treatment:</b> Bentonite Clay absorbs excess oil,
            potentially reducing breakouts for those with oily or acne-prone
            skin. <br />
            <b>Deep Cleansing:</b> This mask helps clean pores, potentially
            reducing the chance of skin infections. <br />
            <b> Insect Bite Relief: </b> Mayan Magic Mud may help soothe
            irritation and redness caused by insect bites.
          </div>
        </label>
        <input type="radio" id="Faq-question39" name="accordion" />
        <label className="item" for="Faq-question39">
          <div className="title">Is Mayan Magic Mud safe for all skin types?</div>
          <div className="content">
            Mayan Magic Mud is formulated to be gentle and suitable for all
            skin types, including sensitive, dry, oily, and mature skin.
            However, it's always recommended to do a patch test on a small
            area of your skin before applying it to your entire face.
          </div>
        </label>
        <input type="radio" id="Faq-question40" name="accordion" />
        <label className="item" for="Faq-question40">
          <div className="title">
            How can I use Mayan Magic Mud? Mayan Magic Mud can be used in
            various ways:
          </div>
          <div className="content">
            <br />
            <b> Face Mask:</b> Apply a thin layer to cleansed skin, avoiding
            the eye area. Leave it on for 10-15 minutes or until slightly dry.
            Rinse thoroughly with warm water and pat your face dry. <br />
            <b> Facial Treatment: </b>Add a teaspoon of Mayan Magic Mud to
            your regular face wash or cleanser for an extra boost of
            cleansing. <br />
            <b> Spot Treatment:</b> Apply a small amount directly to pimples
            or blemishes for targeted treatment. <br />
            <b> Remember, </b> for best results, follow the usage instructions
            provided on the product packaging.
          </div>
        </label>
      </div><Footer /></>
    );
}
