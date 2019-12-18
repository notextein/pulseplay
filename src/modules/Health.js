import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Article from '../components/Article';
import globalStyles from '../styles';

import HeaderLogo from '../media/pulse.jpg';
import HealthResult from '../media/health-result.png';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstHomeButton: {
    width: 300,
    height: 120,
    borderRadius: 10,
    marginTop: 100,
    marginBottom: 20
  },
  sectionContainer: {
    marginTop: 10,
    paddingHorizontal: 24
  }
});

const healthArticles = [
  {
    author: 'Pretty Huge Obstacles',
    caption:
      "I had to let go of my hardcore workouts when I got preggo, but it was still healthy for me to continuing exercising and that's how I discovered PRENATAL YOGA.\n\nMore about my home routine with Isabel Abad Santos of P.Y.T Studio MNL (https://www.instagram.com/pytstudiomnl/) and the benefits of prenatal yoga IN MY BLOG: http://solenn.ph/journals/prenatal-yo...\n\nP.S. As always, you",
    id: 'a897207e-88de-4e8d-9316-daf09948114b',
    likes: 222,
    link: 'https://youtu.be/l7OW6DBy56c',
    media: 'c0229b6a-e304-48a0-8b04-273904c2d728',
    mediaType: '',
    postDate: '2019-12-17 17:17:36',
    preview: 'e90bf9aa-e564-46e1-9112-b3c4f1fb05fc',
    tags:
      'fitness fit fitnessjourney tips fitnesstips health womenshealth healthy lifestyle sefcare motivation goals yoga workout exercise indoor mindbodysoul parenting family maternal childcare babycare healthpersonalities personalities',
    thumbnail: 'e0f98609-7600-4330-903b-469be5136c70',
    title: 'Prenatal Yoga At-Home Routine | Solenn Heussaff',
    views: 916
  },
  {
    author: 'Pru Life UK',
    caption:
      'The #PRUridePH2018 media launch was studded with some of our country\'s top cyclists, including 2017 Prudential RideLondon Filipino representatives Ronnel Hualda and Ismael Grospe, Jr.; national team cyclists Marella Salamat and George Oconer; and the "Queen of Trails" – two-time Asian Mountain Bike Series Overall Female Elite Grand Champion Ariana Dormitorio.\n\nAnd who is this multi-awarded Fil-Am cyclist who',
    id: 'b47f84cf-cf44-4f0f-93a5-3cd11e91007b',
    likes: 24,
    link: 'https://youtu.be/-QXtTwp4vxs',
    media: '49b4f715-9222-43fa-b3c6-d91e671a30d1',
    mediaType: '',
    postDate: '2019-12-17 16:38:00',
    preview: '5f3262a1-5a98-4382-8051-82eaae28239e',
    tags:
      'fitness fit journey health lifetyle wellness challenge sports cycling biking exercise recreation outdoor outdooractivities advocate healthadvocate advocacy personalities healthpersonalities events fitnessevents',
    thumbnail: '5bbb4a14-61d0-41cc-9d3d-d275bcd2b307',
    title: 'World-famous cyclist Coryn Rivera invites you to PRUride PH 2018',
    views: 71
  },
  {
    author: 'Rappler.com',
    caption:
      "Waking up at 3 am everyday? It's no problem for Gretchen Ho, who keeps a positive outlook with these tips.\n\nMANILA, Philippines – Gretchen Ho wakes up at 3 am almost every single day to prepare for her morning show. Despite the early mornings, you’ll never catch her looking tired, stressed, or exhausted from the day before. Her secret? Enough sl",
    id: 'c0f3ff32-d63f-4735-b7c7-01b5ca8cd85d',
    likes: 647,
    link:
      'https://www.rappler.com/life-and-style/wellness/196650-gretchen-ho-self-care-tips',
    media: 'cc0beba9-3e0a-48b5-92cd-4706bc347621',
    mediaType: '',
    postDate: '2019-12-17 16:22:08',
    preview: '843c190e-f91a-456a-9733-7425685beee0',
    tags:
      'selfcare tips fitnesstips health healthyliving healthtalk lifestyle wellness workout mindbodysoul healthpersonalities personalities fitspo fitspiration fitnessinspiration news',
    thumbnail: 'f256a3e8-1013-4518-96b0-ac9c45c8fddf',
    title: '5 self-care practices that keep Gretchen Ho fresh',
    views: 701
  },
  {
    author: '',
    caption:
      'Nike realizes that running is a challenge for most people so their solution is to make it easy. “Our innovation? The Nike Joyride — Nike’s latest proprietary cushioning system made of thousands of TPE beads is the most innovative cushioning system that gives you better impact absorption and a personalized fit, ” according to Nike EKIN Soy Soriano.\nThe latest silhouette to feature Nike Joyride technology, the Nike Joyride Dual Run is designed to help keep legs fresh for a range of runners — whether a first-time jogger or a veteran on a shake-out run.\nINNOVATION AND INSPIRATION.The inspiration for this product was to focus the Joyride technology in the areas where the runner needs it most, primarily the mid-foot and heel of the shoe.\nSoy says that the Nike Joyride Dual Run is Nike’s most innovative launch for the year as it solves the problem of running being hard, exhausting, painful, and mentally difficult.\nA majority of runners are heel strikers. In order to provide the consumer with the best experience, the Running team wanted to provide the maximum benefit of Joyride in the area that benefits Nike consumers most. The team focused on putting the beads in the heel as a Two-Pod and using a traditional foam in the forefoot, which provides runners with a more familiar and smooth toe-off sensation. The gradient colors seen on the Joyride Dual Run are a nod to the smooth transition runners will feel going from beads to foam.\nReluctant Runner: The Running team targeted the reluctant runner when creating this innovation. This is someone that might run for other sports, they might be new to the sport of running, or they might run once a week. The product team wanted to create a shoe that is not just about getting faster, they wanted to create a shoe that helps people get out the door and have fun with running. This is a huge opportunity for the running team, as they have not been able to authentically connect with these runners in the past. \nConforming Cushioning: While developing the Joyride, the team prioritized creating a new sensation for runners. They understood that simply creating a comfortable shoe would not be enough to inspire runners to wear the shoe. The beads in the Joyride system create a conforming cushioning sensation. The shoe conforms to the shape of the foot. The beads were placed where they need them most. They are then encased in a soft foam carrier. The shoe is then covered with a top cloth. By encapsulating the beads in these cavities, the beads are allowed to travel and compress inside of the cavity, creating a conforming sensation. The air that is trapped between the beads escapes when the foot compresses the system. A traditional midsole does not allow for this level of compression, as the air is not able to escape. \nNew Method of Make: All of the shoes across the entire marketplace feature a strobel and a sock liner. The strobel traditionally sits between the foot and the mid-foot cushioning. The Running team wanted to get the consumer’s foot as close as possible to the beads, so they partnered with the factory to create a new method of make that allowed for the removal of both the strobel & the sock liner. Getting the consumer to feel the beads directly was essential to the creation of this shoe. \nOptimizing Weight: To optimize the weight of the shoe, the team wanted to remove excess components and focus on the most important areas of the shoe. Removing the two pods in the forefoot from the original Joyride Running helps to drop the weight of the Joyride Dual Run. This brings Joyride to the consumer in a lighter feeling shoe\nTPE Beads: These beads are the catalyst that will allow for runners to give their legs a much-needed day off. The air pockets that are created inside of the Joyride system allow for the beads to compress more than a slab of foam. When the runner puts more force on the system, the air leaves and the beads compress to create more cushioning for the runner, which in turn creates more impact absorption. The shoe also uses SR02 Foam to provide the right amount of durability and softness underfoot.\nTwo Pods: The pods in the shoe are overfilled, creating a mound of beads in the shoe. By overfilling the heel pod, the beads are able to compress when a runner places their foot into the shoe. Each pod has a different fill rate to create the precise sensation the design team was aiming for. For the Nike Joyride Dual Run, it was important to provide maximum comfort in the heel and mid-foot.\nThe Nike Joyride Dual Run retails for Php 6,745 and will be available at Nike Park and partner retail stores on December 2, 2019.\n\nURL\nhttp://www.takbo.ph/2019/11/nike-joyride/\n',
    id: '9b8d7750-8106-48d3-8d70-8b0e4bb09a30',
    likes: '',
    link: 'http://www.takbo.ph/2019/11/nike-joyride/',
    media: 'cd2f93e5-e912-4d66-8ad6-29efa2da1fb1',
    mediaType: '',
    postDate: '2019-12-17 14:28:00',
    preview: 'd5454625-7c61-4185-a9a4-88207e1067ed',
    tags:
      'Fitness Tips fitnesstips health lifestyle motivation sports running marathon training workout exercise apparel sportsapparel outdoor innovations latest',
    thumbnail: '54d11682-e91a-45ad-82f9-777c8c782e12',
    title: 'Nike Joyride: Making Running Easier',
    views: ''
  },
  {
    author: '',
    caption:
      'A Filipino martial artist was prepared to give up his chance of winning a Southeast Asian Games title because he didn’t want to wear underpants beneath his traditional loincloth.\nCrisamuel Delfin eventually picked up gold for his weapon-wielding anyo routine in the arnis competition, but only after he was persuaded to wear skimpy underwear to avoid a wardrobe malfunction on live television.\n\n“In the Ifugao Igorot culture, it’s an insult to the cultural traditions if you wear undergarments under the loincloth,” Senator Miguel Zubiri, the Philippines Arnis Federation president, told AFP on Wednesday.\n\nThe former world champion said Delfin’s coach had a long argument with judges who had got their knickers in a twist, insisting the fighter wore underpants during his acrobatic routine in case the loincloth fell off and he was left “completely naked”.\n\nBut the coach told them: “Well, I believe my athlete will just have to be disqualified.”\n\nZubiri said he stepped in at the Angeles University Foundation venue and convinced the trainer to “work something out”.\n“I knew this boy could win gold,” he said.\n\nThe senator met with the team and suggested: “Why don’t we get a thong, like a string bikini brief, or something like that?\n\n“Eventually he agreed to wear it. He was willing to be disqualified.”\n\nFilipino ‘arnisadors’ are fiercely proud of their country, and the sport that symbolizes their spirit of defiance.\nMoments after winning gold with a display of somersaults, flips and war-cries, Delfin told AFP his feathered headdress was a sign of ferocity and painted tattoos show a warrior’s accomplishments and place in society.\n\nCrisamuel Delfin of Philippines wins gold medal in the men’s anyo non-traditional of the 30th SEA Games 2019 arnis Competition held at Angeles University Foundation, Pampanga. INQUIRER PHOTO / NIÑO JESUS ORBETA\nA Filipino martial artist was prepared to give up his chance of winning a Southeast Asian Games title because he didn’t want to wear underpants beneath his traditional loincloth.\n\nCrisamuel Delfin eventually picked up gold for his weapon-wielding anyo routine in the arnis competition, but only after he was persuaded to wear skimpy underwear to avoid a wardrobe malfunction on live television.\n\n “In the Ifugao Igorot culture, it’s an insult to the cultural traditions if you wear undergarments under the loincloth,” Senator Miguel Zubiri, the Philippines Arnis Federation president, told AFP on Wednesday.\n\nThe former world champion said Delfin’s coach had a long argument with judges who had got their knickers in a twist, insisting the fighter wore underpants during his acrobatic routine in case the loincloth fell off and he was left “completely naked”.\n\nBut the coach told them: “Well, I believe my athlete will just have to be disqualified.”\n\nZubiri said he stepped in at the Angeles University Foundation venue and convinced the trainer to “work something out”.\n“I knew this boy could win gold,” he said.\n\nThe senator met with the team and suggested: “Why don’t we get a thong, like a string bikini brief, or something like that?\n\nURL\nhttps://sports.inquirer.net/378824/brief-encounter-filipino-fighter-wins-sea-games-gold-after-underwear-row\n',
    id: '8e7a3a2d-3e0e-4eac-95d8-1ec2ed510786',
    likes: '',
    link:
      'https://sports.inquirer.net/378824/brief-encounter-filipino-fighter-wins-sea-games-gold-after-underwear-row',
    media: '6139b24d-7f68-4597-955f-bdc8fd947234',
    mediaType: '',
    postDate: '2019-12-17 14:26:00',
    preview: '98fd46e9-0e4a-4557-b7d4-94738ff902aa',
    tags:
      'fitness tips fitnesstips health healthy healthyliving lifestyle selfcare motivation goals coaching healthpersonalities personalities',
    thumbnail: '012d31c4-b3fe-4f98-a077-a81da738e58a',
    title:
      'Brief encounter: Filipino fighter wins SEA Games gold after underwear row',
    views: ''
  },
  {
    author: '',
    caption:
      'Sometimes it can feel like your bad habits are preventing you from being healthy and moving towards your fitness goals. Don’t worry, this can happen to anyone! \nThat’s why I’ve put together this quick guide to changing some of the bad habits that my community has asked about. Remember, when it comes to health and fitness, even small changes can lead to big results. \nBad habits that can derail your fitness goals \nIf you feel like you may have some bad habits, you are certainly not alone! Here are some unhealthy habits that I often get asked about: \n- Not getting enough sleep\n- Missing your workouts\n- Eating while distracted\n- Underestimating the importance of breakfast\n- Emotional eating\n- Binge eating or overeating days\n- Not drinking enough water\n- Using your phone late at night\nThis list may seem daunting, but don’t despair! Bad habits arise for a reason, and when you understand how a bad habit got into your life in the first place, you’ll be surprised how a few small lifestyle changes can help you to change them. \nHow to break bad habits\nHere are my best tips for breaking bad habits that can get in the way of achieving your goals: \n \nKnow what triggers unhealthy behaviour\nUnderstanding how the bad habit arose in the first place puts you in a much stronger position to change it',
    id: '58d82bcb-b556-4272-b9a0-4d8b5d881679',
    likes: '',
    link: 'https://www.youtube.com/watch?v=812xnfJWR80',
    media: '8e683a78-b235-4feb-afc7-58c9536fa523',
    mediaType: '',
    postDate: '2019-12-17 14:23:00',
    preview: '27391c6f-3c13-4385-a76f-3dcd59577935',
    tags:
      'fitness tips fitnesstips health healthy healthyliving lifestyle selfcare motivation goals coaching healthpersonalities personalities',
    thumbnail: '207871ab-b763-4182-8a7e-bf1f87ee97a2',
    title: 'Pinoys Rejoice as Timor Leste wins medals in 30th SEAG',
    views: ''
  },
  {
    author: '',
    caption:
      'Sometimes it can feel like your bad habits are preventing you from being healthy and moving towards your fitness goals. Don’t worry, this can happen to anyone! \nThat’s why I’ve put together this quick guide to changing some of the bad habits that my community has asked about. Remember, when it comes to health and fitness, even small changes can lead to big results. \nBad habits that can derail your fitness goals \nIf you feel like you may have some bad habits, you are certainly not alone! Here are some unhealthy habits that I often get asked about: \n- Not getting enough sleep\n- Missing your workouts\n- Eating while distracted\n- Underestimating the importance of breakfast\n- Emotional eating\n- Binge eating or overeating days\n- Not drinking enough water\n- Using your phone late at night\nThis list may seem daunting, but don’t despair! Bad habits arise for a reason, and when you understand how a bad habit got into your life in the first place, you’ll be surprised how a few small lifestyle changes can help you to change them. \nHow to break bad habits\nHere are my best tips for breaking bad habits that can get in the way of achieving your goals: \n \nKnow what triggers unhealthy behaviour\nUnderstanding how the bad habit arose in the first place puts you in a much stronger position to change it',
    id: '626fbe1c-1e9e-4f2d-82bb-f500519fff74',
    likes: '',
    link:
      'https://www.kaylaitsines.com/blogs/lifestyle/how-to-break-bad-habits',
    media: '5040406e-7bdf-4b82-a53c-3cbeb2e07be8',
    mediaType: '',
    postDate: '2019-12-17 14:20:00',
    preview: '18ae29b4-6272-49c1-b3e3-6465fff91cd1',
    tags:
      'fitness tips fitnesstips health healthy healthyliving lifestyle selfcare motivation goals coaching healthpersonalities personalities',
    thumbnail: 'e3816d6f-ecf1-4a82-b035-71faedf62436',
    title: 'How To Break Bad Habits To Feel Healthier and More Confident',
    views: ''
  },
  {
    author: 'April Magazine',
    caption:
      'Thanks to Twittersphere, the dialogue on mental health is getting out of the offices of teachers, lawyers, and doctors and spreading over virtual streets. Now the professionals turn to the internet to raise the awareness. Among them is Dr. Gia Sison, a Filipino mental health advocate and a kind of hero who turns her personal pain into a gre',
    id: '57a79557-fdfe-4667-9689-7da78826b651',
    likes: 453,
    link:
      'https://www.aprilmag.com/2018/06/06/dr-gia-sison-filipino-mental-health-advocate-and-cancer-survivor-gives-back-using-twitter/',
    media: '62108c3d-ce7b-4e55-a36f-fae33e94ab39',
    mediaType: '',
    postDate: '2019-12-17 04:09:20',
    preview: 'd8ad1f43-d316-4781-8186-5a724ed8d275',
    tags:
      'health tips healthyliving lifestyle wellness selfcare motivation advocate healthadvocate advocacy educational mental mentalhealth trending healthpersonalities personalities mentalcoach campaign',
    thumbnail: 'd81cfc97-9e64-4c1b-9741-987f1d58c872',
    title:
      'Dr. Gia Sison: Filipino mental health advocate and cancer survivor gives back using Twitter',
    views: 470
  }
];

export default class Health extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.main}>
        <Image style={globalStyles.headerLogo} source={HeaderLogo} />
        <ScrollView style={{ marginTop: 100 }}>
          <Image
            resizeMode='cover'
            style={{ marginLeft: 20, width: 320 }}
            source={HealthResult}
          />
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Related articles:</Text>
            {healthArticles.map((el, idx) => (
              <Article key={idx} navigation={navigation} {...el} />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
