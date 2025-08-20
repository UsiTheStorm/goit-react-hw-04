import { useState } from 'react';
import './App.css';

import LoadMoreBtn from './components/LoadMoreBtn';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import ImageModal from './components/ImageModal';

const tempData = {
  total: 10000,
  total_pages: 1000,
  results: [
    {
      id: 'yihlaRCCvd4',
      slug: 'dog-running-on-beach-during-daytime-yihlaRCCvd4',
      alternative_slugs: {
        en: 'dog-running-on-beach-during-daytime-yihlaRCCvd4',
        es: 'perro-corriendo-en-la-playa-durante-el-dia-yihlaRCCvd4',
        ja: '昼間ビーチを走る犬-yihlaRCCvd4',
        fr: 'chien-courant-sur-la-plage-pendant-la-journee-yihlaRCCvd4',
        it: 'cane-che-corre-sulla-spiaggia-durante-il-giorno-yihlaRCCvd4',
        ko: '낮에-해변에서-달리는-개-yihlaRCCvd4',
        de: 'hund-der-tagsuber-am-strand-lauft-yihlaRCCvd4',
        pt: 'cachorro-correndo-na-praia-durante-o-dia-yihlaRCCvd4',
        id: 'anjing-berlari-di-pantai-pada-siang-hari-yihlaRCCvd4',
      },
      created_at: '2018-06-29T14:15:36Z',
      updated_at: '2025-08-19T13:26:37Z',
      promoted_at: '2018-06-30T14:58:13Z',
      width: 4016,
      height: 6016,
      color: '#f3f3f3',
      blur_hash: 'L$Nm~Ht7tlof~VaeV@fk%gogaKax',
      description:
        'Nova Scotia Duck Tolling Retriever for PuppyHero.com:\nhttps://puppyhero.com/breed/nova-scotia-duck-tolling-retriever',
      alt_description: 'dog running on beach during daytime',
      breadcrumbs: [],
      urls: {
        raw: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwxfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0',
        full: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwxfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=85',
        regular:
          'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwxfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        small:
          'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwxfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=400',
        thumb:
          'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwxfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=200',
        small_s3:
          'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1530281700549-e82e7bf110d6',
      },
      links: {
        self: 'https://api.unsplash.com/photos/dog-running-on-beach-during-daytime-yihlaRCCvd4',
        html: 'https://unsplash.com/photos/dog-running-on-beach-during-daytime-yihlaRCCvd4',
        download:
          'https://unsplash.com/photos/yihlaRCCvd4/download?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwxfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA',
        download_location:
          'https://api.unsplash.com/photos/yihlaRCCvd4/download?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwxfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA',
      },
      likes: 2201,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {
        animals: {
          status: 'approved',
          approved_on: '2024-06-11T11:55:18Z',
        },
      },
      asset_type: 'photo',
      user: {
        id: '3kpmmkI-Gco',
        updated_at: '2024-10-10T21:23:05Z',
        username: 'o5ky',
        name: 'Oscar Sutton',
        first_name: 'Oscar',
        last_name: 'Sutton',
        twitter_username: 'o5ky',
        portfolio_url: 'https://www.instagram.com/o5ky/',
        bio: 'I am an amature photographer who has a passion for getting the perfect shot.',
        location: 'UK',
        links: {
          self: 'https://api.unsplash.com/users/o5ky',
          html: 'https://unsplash.com/@o5ky',
          photos: 'https://api.unsplash.com/users/o5ky/photos',
          likes: 'https://api.unsplash.com/users/o5ky/likes',
          portfolio: 'https://api.unsplash.com/users/o5ky/portfolio',
          following: 'https://api.unsplash.com/users/o5ky/following',
          followers: 'https://api.unsplash.com/users/o5ky/followers',
        },
        profile_image: {
          small:
            'https://images.unsplash.com/profile-1503663739871-e0806dbe6f23?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
          medium:
            'https://images.unsplash.com/profile-1503663739871-e0806dbe6f23?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
          large:
            'https://images.unsplash.com/profile-1503663739871-e0806dbe6f23?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
        },
        instagram_username: 'O5ky',
        total_collections: 4,
        total_likes: 71,
        total_photos: 109,
        total_promoted_photos: 13,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: 'O5ky',
          portfolio_url: 'https://www.instagram.com/o5ky/',
          twitter_username: 'o5ky',
          paypal_email: null,
        },
      },
    },
    {
      id: 'mx0DEnfYxic',
      slug: 'long-coated-black-and-white-dog-during-daytime-mx0DEnfYxic',
      alternative_slugs: {
        en: 'long-coated-black-and-white-dog-during-daytime-mx0DEnfYxic',
        es: 'perro-blanco-y-negro-de-pelo-largo-durante-el-dia-mx0DEnfYxic',
        ja: '昼間はロングコートの黒と白の犬-mx0DEnfYxic',
        fr: 'chien-noir-et-blanc-a-poil-long-pendant-la-journee-mx0DEnfYxic',
        it: 'cane-bianco-e-nero-a-pelo-lungo-durante-il-giorno-mx0DEnfYxic',
        ko: '낮-동안-긴-코팅-된-흑백-개-mx0DEnfYxic',
        de: 'langhaariger-schwarz-weisser-hund-tagsuber-mx0DEnfYxic',
        pt: 'cao-preto-e-branco-de-pelagem-longa-durante-o-dia-mx0DEnfYxic',
        id: 'anjing-hitam-dan-putih-berlapis-panjang-di-siang-hari-mx0DEnfYxic',
      },
      created_at: '2017-08-20T19:12:54Z',
      updated_at: '2025-08-19T09:31:42Z',
      promoted_at: '2017-08-21T10:52:34Z',
      width: 2848,
      height: 4288,
      color: '#597373',
      blur_hash: 'LTD]uSR*JB%20KkCjYWBozae%MS4',
      description: 'Border Collie',
      alt_description: 'long-coated black and white dog during daytime',
      breadcrumbs: [],
      urls: {
        raw: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwyfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0',
        full: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwyfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=85',
        regular:
          'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwyfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        small:
          'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwyfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=400',
        thumb:
          'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwyfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=200',
        small_s3:
          'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1503256207526-0d5d80fa2f47',
      },
      links: {
        self: 'https://api.unsplash.com/photos/long-coated-black-and-white-dog-during-daytime-mx0DEnfYxic',
        html: 'https://unsplash.com/photos/long-coated-black-and-white-dog-during-daytime-mx0DEnfYxic',
        download:
          'https://unsplash.com/photos/mx0DEnfYxic/download?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwyfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA',
        download_location:
          'https://api.unsplash.com/photos/mx0DEnfYxic/download?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwyfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA',
      },
      likes: 2867,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {
        animals: {
          status: 'approved',
          approved_on: '2024-12-17T10:00:13Z',
        },
      },
      asset_type: 'photo',
      user: {
        id: 'bxCGdD_L48g',
        updated_at: '2025-02-12T01:16:54Z',
        username: 'baptiststandaert',
        name: 'Baptist Standaert',
        first_name: 'Baptist',
        last_name: 'Standaert',
        twitter_username: 'BStandaert',
        portfolio_url: 'https://www.behance.net/BaptistStandaert',
        bio: null,
        location: 'Brugge',
        links: {
          self: 'https://api.unsplash.com/users/baptiststandaert',
          html: 'https://unsplash.com/@baptiststandaert',
          photos: 'https://api.unsplash.com/users/baptiststandaert/photos',
          likes: 'https://api.unsplash.com/users/baptiststandaert/likes',
          portfolio: 'https://api.unsplash.com/users/baptiststandaert/portfolio',
          following: 'https://api.unsplash.com/users/baptiststandaert/following',
          followers: 'https://api.unsplash.com/users/baptiststandaert/followers',
        },
        profile_image: {
          small:
            'https://images.unsplash.com/profile-1581370012090-d3c02fd5d56bimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
          medium:
            'https://images.unsplash.com/profile-1581370012090-d3c02fd5d56bimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
          large:
            'https://images.unsplash.com/profile-1581370012090-d3c02fd5d56bimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
        },
        instagram_username: 'baptiststandaert',
        total_collections: 0,
        total_likes: 28,
        total_photos: 6,
        total_promoted_photos: 3,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: false,
        for_hire: false,
        social: {
          instagram_username: 'baptiststandaert',
          portfolio_url: 'https://www.behance.net/BaptistStandaert',
          twitter_username: 'BStandaert',
          paypal_email: null,
        },
      },
    },
    {
      id: 'qO-PIF84Vxg',
      slug: 'shallow-focus-photography-of-white-shih-tzu-puppy-running-on-the-grass-qO-PIF84Vxg',
      alternative_slugs: {
        en: 'shallow-focus-photography-of-white-shih-tzu-puppy-running-on-the-grass-qO-PIF84Vxg',
        es: 'fotografia-de-enfoque-superficial-de-cachorro-blanco-de-shih-tzu-corriendo-sobre-la-hierba-qO-PIF84Vxg',
        ja: '芝生の上を走る白いシーズーの子犬の浅い焦点写真-qO-PIF84Vxg',
        fr: 'photographie-a-mise-au-point-peu-profonde-dun-chiot-shih-tzu-blanc-courant-sur-lherbe-qO-PIF84Vxg',
        it: 'fotografia-a-fuoco-superficiale-del-cucciolo-bianco-di-shih-tzu-che-corre-sullerba-qO-PIF84Vxg',
        ko: '풀밭에서-달리는-흰색-shih-tzu-강아지의-얕은-초점-사진-qO-PIF84Vxg',
        de: 'flachfokusfotografie-eines-weissen-shih-tzu-welpen-der-auf-dem-gras-lauft-qO-PIF84Vxg',
        pt: 'fotografia-de-foco-raso-do-filhote-de-cachorro-branco-de-shih-tzu-correndo-na-grama-qO-PIF84Vxg',
        id: 'fotografi-fokus-dangkal-anak-anjing-shih-tzu-putih-berlari-di-rumput-qO-PIF84Vxg',
      },
      created_at: '2018-08-15T21:11:28Z',
      updated_at: '2025-08-19T09:25:35Z',
      promoted_at: '2018-08-16T08:51:50Z',
      width: 5184,
      height: 3456,
      color: '#0c2626',
      blur_hash: 'LC8;fFD~9E^-ICVuWUt7D~xv%3IT',
      description: 'Fluffy cockapoo having the time of his life at the park',
      alt_description: 'shallow focus photography of white shih tzu puppy running on the grass',
      breadcrumbs: [],
      urls: {
        raw: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwzfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0',
        full: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwzfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=85',
        regular:
          'https://images.unsplash.com/photo-1534361960057-19889db9621e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwzfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        small:
          'https://images.unsplash.com/photo-1534361960057-19889db9621e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwzfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=400',
        thumb:
          'https://images.unsplash.com/photo-1534361960057-19889db9621e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwzfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=200',
        small_s3:
          'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1534361960057-19889db9621e',
      },
      links: {
        self: 'https://api.unsplash.com/photos/shallow-focus-photography-of-white-shih-tzu-puppy-running-on-the-grass-qO-PIF84Vxg',
        html: 'https://unsplash.com/photos/shallow-focus-photography-of-white-shih-tzu-puppy-running-on-the-grass-qO-PIF84Vxg',
        download:
          'https://unsplash.com/photos/qO-PIF84Vxg/download?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwzfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA',
        download_location:
          'https://api.unsplash.com/photos/qO-PIF84Vxg/download?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwzfHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA',
      },
      likes: 2615,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      asset_type: 'photo',
      user: {
        id: 's_n3DlAm8iY',
        updated_at: '2025-07-26T20:00:24Z',
        username: 'joeyc',
        name: 'Joe Caione',
        first_name: 'Joe',
        last_name: 'Caione',
        twitter_username: '_JoeyC_',
        portfolio_url: 'http://MadeByJoeyC.com',
        bio: '🍕🏀',
        location: 'Cleveland, OH',
        links: {
          self: 'https://api.unsplash.com/users/joeyc',
          html: 'https://unsplash.com/@joeyc',
          photos: 'https://api.unsplash.com/users/joeyc/photos',
          likes: 'https://api.unsplash.com/users/joeyc/likes',
          portfolio: 'https://api.unsplash.com/users/joeyc/portfolio',
        },
        profile_image: {
          small:
            'https://images.unsplash.com/profile-1446647338458-f976efa11db9?ixlib=rb-4.1.0&crop=faces&fit=crop&w=32&h=32',
          medium:
            'https://images.unsplash.com/profile-1446647338458-f976efa11db9?ixlib=rb-4.1.0&crop=faces&fit=crop&w=64&h=64',
          large:
            'https://images.unsplash.com/profile-1446647338458-f976efa11db9?ixlib=rb-4.1.0&crop=faces&fit=crop&w=128&h=128',
        },
        instagram_username: 'ShotByJoeyC',
        total_collections: 0,
        total_likes: 154,
        total_photos: 23,
        total_promoted_photos: 8,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: 'ShotByJoeyC',
          portfolio_url: 'http://MadeByJoeyC.com',
          twitter_username: '_JoeyC_',
          paypal_email: null,
        },
      },
    },
    {
      id: 'K4mSJ7kc0As',
      slug: 'black-dog-wearing-blue-denim-collar-K4mSJ7kc0As',
      alternative_slugs: {
        en: 'black-dog-wearing-blue-denim-collar-K4mSJ7kc0As',
        es: 'perro-negro-con-collar-de-mezclilla-azul-K4mSJ7kc0As',
        ja: 'ブルーデニムの襟を着た黒い犬-K4mSJ7kc0As',
        fr: 'chien-noir-portant-un-collier-en-jean-bleu-K4mSJ7kc0As',
        it: 'cane-nero-che-indossa-collare-di-jeans-blu-K4mSJ7kc0As',
        ko: '블루-데님-칼라를-입은-검은-개-K4mSJ7kc0As',
        de: 'schwarzer-hund-tragt-blaues-jeanshalsband-K4mSJ7kc0As',
        pt: 'cao-preto-vestindo-coleira-jeans-azul-K4mSJ7kc0As',
        id: 'anjing-hitam-mengenakan-kerah-denim-biru-K4mSJ7kc0As',
      },
      created_at: '2018-02-07T16:21:22Z',
      updated_at: '2025-08-19T12:32:44Z',
      promoted_at: '2018-02-08T14:29:58Z',
      width: 2776,
      height: 3866,
      color: '#d9d9d9',
      blur_hash: 'LZK1]@Rj_Nae~Wa#M{of_3WBIAWV',
      description: 'Toshi (black pug) wearing my pilot jacket.',
      alt_description: 'black dog wearing blue denim collar',
      breadcrumbs: [],
      urls: {
        raw: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw0fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0',
        full: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw0fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=85',
        regular:
          'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw0fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        small:
          'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw0fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=400',
        thumb:
          'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw0fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=200',
        small_s3:
          'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1518020382113-a7e8fc38eac9',
      },
      links: {
        self: 'https://api.unsplash.com/photos/black-dog-wearing-blue-denim-collar-K4mSJ7kc0As',
        html: 'https://unsplash.com/photos/black-dog-wearing-blue-denim-collar-K4mSJ7kc0As',
        download:
          'https://unsplash.com/photos/K4mSJ7kc0As/download?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw0fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA',
        download_location:
          'https://api.unsplash.com/photos/K4mSJ7kc0As/download?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw0fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA',
      },
      likes: 4012,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {
        animals: {
          status: 'approved',
          approved_on: '2020-04-06T14:20:16Z',
        },
      },
      asset_type: 'photo',
      user: {
        id: 'mA08QQzQf8Y',
        updated_at: '2025-08-14T14:29:55Z',
        username: 'charlesdeluvio',
        name: 'charlesdeluvio',
        first_name: 'charlesdeluvio',
        last_name: null,
        twitter_username: null,
        portfolio_url: null,
        bio: 'Graphic designer',
        location: 'Montreal',
        links: {
          self: 'https://api.unsplash.com/users/charlesdeluvio',
          html: 'https://unsplash.com/@charlesdeluvio',
          photos: 'https://api.unsplash.com/users/charlesdeluvio/photos',
          likes: 'https://api.unsplash.com/users/charlesdeluvio/likes',
          portfolio: 'https://api.unsplash.com/users/charlesdeluvio/portfolio',
        },
        profile_image: {
          small:
            'https://images.unsplash.com/profile-1515694660956-9133b2f53e3b?ixlib=rb-4.1.0&crop=faces&fit=crop&w=32&h=32',
          medium:
            'https://images.unsplash.com/profile-1515694660956-9133b2f53e3b?ixlib=rb-4.1.0&crop=faces&fit=crop&w=64&h=64',
          large:
            'https://images.unsplash.com/profile-1515694660956-9133b2f53e3b?ixlib=rb-4.1.0&crop=faces&fit=crop&w=128&h=128',
        },
        instagram_username: null,
        total_collections: 136,
        total_likes: 5285,
        total_photos: 672,
        total_promoted_photos: 294,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: null,
          portfolio_url: null,
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: 'AbNO2iejoXA',
      slug: 'a-brown-dog-sitting-on-top-of-a-sandy-beach-AbNO2iejoXA',
      alternative_slugs: {
        en: 'a-brown-dog-sitting-on-top-of-a-sandy-beach-AbNO2iejoXA',
        es: 'un-perro-marron-sentado-en-la-cima-de-una-playa-de-arena-AbNO2iejoXA',
        ja: '砂浜の上に座る茶色の犬-AbNO2iejoXA',
        fr: 'un-chien-brun-assis-au-sommet-dune-plage-de-sable-AbNO2iejoXA',
        it: 'un-cane-marrone-seduto-in-cima-a-una-spiaggia-sabbiosa-AbNO2iejoXA',
        ko: '모래-해변-위에-앉아있는-갈색-개-AbNO2iejoXA',
        de: 'ein-brauner-hund-der-auf-einem-sandstrand-sitzt-AbNO2iejoXA',
        pt: 'um-cao-marrom-sentado-em-cima-de-uma-praia-de-areia-AbNO2iejoXA',
        id: 'seekor-anjing-coklat-duduk-di-atas-pantai-berpasir-AbNO2iejoXA',
      },
      created_at: '2017-09-07T23:18:53Z',
      updated_at: '2025-08-19T12:28:27Z',
      promoted_at: '2017-09-07T23:38:43Z',
      width: 3226,
      height: 4839,
      color: '#f3f3f3',
      blur_hash: 'LyN^e?I:tRxu?^SOWBWBE1S3RjWB',
      description: 'Cockerpoo',
      alt_description: 'a brown dog sitting on top of a sandy beach',
      breadcrumbs: [],
      urls: {
        raw: 'https://images.unsplash.com/photo-1504826260979-242151ee45b7?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw1fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0',
        full: 'https://images.unsplash.com/photo-1504826260979-242151ee45b7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw1fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=85',
        regular:
          'https://images.unsplash.com/photo-1504826260979-242151ee45b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw1fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        small:
          'https://images.unsplash.com/photo-1504826260979-242151ee45b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw1fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=400',
        thumb:
          'https://images.unsplash.com/photo-1504826260979-242151ee45b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw1fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=200',
        small_s3:
          'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1504826260979-242151ee45b7',
      },
      links: {
        self: 'https://api.unsplash.com/photos/a-brown-dog-sitting-on-top-of-a-sandy-beach-AbNO2iejoXA',
        html: 'https://unsplash.com/photos/a-brown-dog-sitting-on-top-of-a-sandy-beach-AbNO2iejoXA',
        download:
          'https://unsplash.com/photos/AbNO2iejoXA/download?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw1fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA',
        download_location:
          'https://api.unsplash.com/photos/AbNO2iejoXA/download?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw1fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA',
      },
      likes: 2587,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {
        wallpapers: {
          status: 'approved',
          approved_on: '2021-03-22T14:41:13Z',
        },
        animals: {
          status: 'approved',
          approved_on: '2020-04-06T14:20:16Z',
        },
      },
      asset_type: 'photo',
      user: {
        id: 'OOlP2c2_w_4',
        updated_at: '2024-10-23T01:19:10Z',
        username: 'rwltn1',
        name: 'Ryan Walton',
        first_name: 'Ryan',
        last_name: 'Walton',
        twitter_username: null,
        portfolio_url: null,
        bio: null,
        location: null,
        links: {
          self: 'https://api.unsplash.com/users/rwltn1',
          html: 'https://unsplash.com/@rwltn1',
          photos: 'https://api.unsplash.com/users/rwltn1/photos',
          likes: 'https://api.unsplash.com/users/rwltn1/likes',
          portfolio: 'https://api.unsplash.com/users/rwltn1/portfolio',
        },
        profile_image: {
          small:
            'https://images.unsplash.com/profile-1504826550317-3c502b97e088?ixlib=rb-4.1.0&crop=faces&fit=crop&w=32&h=32',
          medium:
            'https://images.unsplash.com/profile-1504826550317-3c502b97e088?ixlib=rb-4.1.0&crop=faces&fit=crop&w=64&h=64',
          large:
            'https://images.unsplash.com/profile-1504826550317-3c502b97e088?ixlib=rb-4.1.0&crop=faces&fit=crop&w=128&h=128',
        },
        instagram_username: null,
        total_collections: 0,
        total_likes: 14,
        total_photos: 5,
        total_promoted_photos: 5,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: false,
        for_hire: false,
        social: {
          instagram_username: null,
          portfolio_url: null,
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: 'N04FIfHhv_k',
      slug: 'black-and-white-short-coated-dog-N04FIfHhv_k',
      alternative_slugs: {
        en: 'black-and-white-short-coated-dog-N04FIfHhv_k',
        es: 'perro-de-pelo-corto-blanco-y-negro-N04FIfHhv_k',
        ja: '黒と白のショートコートの犬-N04FIfHhv_k',
        fr: 'chien-a-poil-court-noir-et-blanc-N04FIfHhv_k',
        it: 'cane-a-pelo-corto-in-bianco-e-nero-N04FIfHhv_k',
        ko: '흑인과-백인-짧은-코팅-개-N04FIfHhv_k',
        de: 'schwarz-weisser-hund-mit-kurzem-fell-N04FIfHhv_k',
        pt: 'cao-de-pelagem-curta-preto-e-branco-N04FIfHhv_k',
        id: 'anjing-berlapis-pendek-hitam-dan-putih-N04FIfHhv_k',
      },
      created_at: '2019-06-20T13:30:15Z',
      updated_at: '2025-08-19T10:22:38Z',
      promoted_at: '2019-06-22T05:43:24Z',
      width: 6000,
      height: 4000,
      color: '#f3d9c0',
      blur_hash: 'LTPFZU?H}[4:RQofW-of?aNGE1%2',
      description:
        'Jack Russell Terrier for PuppyHero.com: puppyhero.com/breed/jack-russell-terrier',
      alt_description: 'black and white short coated dog',
      breadcrumbs: [],
      urls: {
        raw: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw2fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0',
        full: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw2fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=85',
        regular:
          'https://images.unsplash.com/photo-1561037404-61cd46aa615b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw2fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        small:
          'https://images.unsplash.com/photo-1561037404-61cd46aa615b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw2fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=400',
        thumb:
          'https://images.unsplash.com/photo-1561037404-61cd46aa615b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw2fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=200',
        small_s3:
          'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1561037404-61cd46aa615b',
      },
      links: {
        self: 'https://api.unsplash.com/photos/black-and-white-short-coated-dog-N04FIfHhv_k',
        html: 'https://unsplash.com/photos/black-and-white-short-coated-dog-N04FIfHhv_k',
        download:
          'https://unsplash.com/photos/N04FIfHhv_k/download?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw2fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA',
        download_location:
          'https://api.unsplash.com/photos/N04FIfHhv_k/download?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw2fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA',
      },
      likes: 1723,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {
        animals: {
          status: 'approved',
          approved_on: '2024-01-29T10:03:21Z',
        },
      },
      asset_type: 'photo',
      user: {
        id: '23l-A2OoQPo',
        updated_at: '2025-05-21T01:20:54Z',
        username: 'victor_vector',
        name: 'Victor G',
        first_name: 'Victor',
        last_name: 'G',
        twitter_username: null,
        portfolio_url: null,
        bio: 'Dogs & Stuff',
        location: 'Poznan - Poland',
        links: {
          self: 'https://api.unsplash.com/users/victor_vector',
          html: 'https://unsplash.com/@victor_vector',
          photos: 'https://api.unsplash.com/users/victor_vector/photos',
          likes: 'https://api.unsplash.com/users/victor_vector/likes',
          portfolio: 'https://api.unsplash.com/users/victor_vector/portfolio',
        },
        profile_image: {
          small:
            'https://images.unsplash.com/profile-1660995111094-afcfbc992665image?ixlib=rb-4.1.0&crop=faces&fit=crop&w=32&h=32',
          medium:
            'https://images.unsplash.com/profile-1660995111094-afcfbc992665image?ixlib=rb-4.1.0&crop=faces&fit=crop&w=64&h=64',
          large:
            'https://images.unsplash.com/profile-1660995111094-afcfbc992665image?ixlib=rb-4.1.0&crop=faces&fit=crop&w=128&h=128',
        },
        instagram_username: null,
        total_collections: 0,
        total_likes: 56,
        total_photos: 534,
        total_promoted_photos: 72,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: null,
          portfolio_url: null,
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: 'Sg3XwuEpybU',
      slug: 'yellow-labrador-retriever-biting-yellow-tulip-flower-Sg3XwuEpybU',
      alternative_slugs: {
        en: 'yellow-labrador-retriever-biting-yellow-tulip-flower-Sg3XwuEpybU',
        es: 'labrador-retriever-amarillo-mordiendo-flor-de-tulipan-amarillo-Sg3XwuEpybU',
        ja: '黄色いチューリップの花を噛む黄色いラブラドールレトリバー-Sg3XwuEpybU',
        fr: 'labrador-retriever-jaune-mordant-la-fleur-de-tulipe-jaune-Sg3XwuEpybU',
        it: 'labrador-retriever-giallo-che-morde-il-fiore-giallo-del-tulipano-Sg3XwuEpybU',
        ko: '노란-래브라도-리트리버-물고-노란-튤립-꽃-Sg3XwuEpybU',
        de: 'gelber-labrador-retriever-beisst-gelbe-tulpenblute-Sg3XwuEpybU',
        pt: 'labrador-retriever-amarelo-mordendo-flor-amarela-da-tulipa-Sg3XwuEpybU',
        id: 'kuning-labrador-retriever-menggigit-bunga-tulip-kuning-Sg3XwuEpybU',
      },
      created_at: '2019-03-08T14:04:22Z',
      updated_at: '2025-08-19T10:08:35Z',
      promoted_at: '2019-03-11T10:12:41Z',
      width: 3742,
      height: 6000,
      color: '#402626',
      blur_hash: 'LKF=s[8_Os%MO[IAWrxu?^Mx-:tR',
      description: 'Happy Women’s Day!',
      alt_description: 'yellow Labrador retriever biting yellow tulip flower',
      breadcrumbs: [],
      urls: {
        raw: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw3fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0',
        full: 'https://images.unsplash.com/photo-1552053831-71594a27632d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw3fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=85',
        regular:
          'https://images.unsplash.com/photo-1552053831-71594a27632d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw3fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        small:
          'https://images.unsplash.com/photo-1552053831-71594a27632d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw3fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=400',
        thumb:
          'https://images.unsplash.com/photo-1552053831-71594a27632d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw3fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=200',
        small_s3:
          'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1552053831-71594a27632d',
      },
      links: {
        self: 'https://api.unsplash.com/photos/yellow-labrador-retriever-biting-yellow-tulip-flower-Sg3XwuEpybU',
        html: 'https://unsplash.com/photos/yellow-labrador-retriever-biting-yellow-tulip-flower-Sg3XwuEpybU',
        download:
          'https://unsplash.com/photos/Sg3XwuEpybU/download?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw3fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA',
        download_location:
          'https://api.unsplash.com/photos/Sg3XwuEpybU/download?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw3fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA',
      },
      likes: 2536,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {
        animals: {
          status: 'approved',
          approved_on: '2023-12-06T17:53:20Z',
        },
      },
      asset_type: 'photo',
      user: {
        id: 'y9oEVbc-NAE',
        updated_at: '2024-10-31T06:14:08Z',
        username: 'richardbrutyo',
        name: 'Richard Brutyo',
        first_name: 'Richard',
        last_name: 'Brutyo',
        twitter_username: null,
        portfolio_url: null,
        bio: 'instagram: richardbrutyo',
        location: 'Szeged',
        links: {
          self: 'https://api.unsplash.com/users/richardbrutyo',
          html: 'https://unsplash.com/@richardbrutyo',
          photos: 'https://api.unsplash.com/users/richardbrutyo/photos',
          likes: 'https://api.unsplash.com/users/richardbrutyo/likes',
          portfolio: 'https://api.unsplash.com/users/richardbrutyo/portfolio',
        },
        profile_image: {
          small:
            'https://images.unsplash.com/profile-1549929411753-5b10f8c9b0fb?ixlib=rb-4.1.0&crop=faces&fit=crop&w=32&h=32',
          medium:
            'https://images.unsplash.com/profile-1549929411753-5b10f8c9b0fb?ixlib=rb-4.1.0&crop=faces&fit=crop&w=64&h=64',
          large:
            'https://images.unsplash.com/profile-1549929411753-5b10f8c9b0fb?ixlib=rb-4.1.0&crop=faces&fit=crop&w=128&h=128',
        },
        instagram_username: 'richardbrutyo',
        total_collections: 0,
        total_likes: 1,
        total_photos: 22,
        total_promoted_photos: 8,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: 'richardbrutyo',
          portfolio_url: null,
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: 'Mv9hjnEUHR4',
      slug: 'black-pug-with-gray-knit-scarf-Mv9hjnEUHR4',
      alternative_slugs: {
        en: 'black-pug-with-gray-knit-scarf-Mv9hjnEUHR4',
        es: 'pug-negro-con-bufanda-de-punto-gris-Mv9hjnEUHR4',
        ja: 'ブラックパグにグレーのニットスカーフ-Mv9hjnEUHR4',
        fr: 'carlin-noir-avec-echarpe-en-tricot-gris-Mv9hjnEUHR4',
        it: 'carlino-nero-con-sciarpa-in-maglia-grigia-Mv9hjnEUHR4',
        ko: '블랙-퍼그-그레이-니트-스카프-Mv9hjnEUHR4',
        de: 'schwarzer-mops-mit-grauem-strickschal-Mv9hjnEUHR4',
        pt: 'pug-preto-com-lenco-de-malha-cinza-Mv9hjnEUHR4',
        id: 'pug-hitam-dengan-syal-rajutan-abu-abu-Mv9hjnEUHR4',
      },
      created_at: '2018-02-05T16:58:13Z',
      updated_at: '2025-08-19T12:44:16Z',
      promoted_at: '2018-02-06T12:32:01Z',
      width: 3024,
      height: 4032,
      color: '#f3c00c',
      blur_hash: 'LlMiSjxB^ct5}%NfItWC%KskIsj[',
      description: 'Toshi wearing a knit sweater.',
      alt_description: 'black pug with gray knit scarf',
      breadcrumbs: [],
      urls: {
        raw: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw4fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0',
        full: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw4fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=85',
        regular:
          'https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw4fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        small:
          'https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw4fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=400',
        thumb:
          'https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw4fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=200',
        small_s3:
          'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1517849845537-4d257902454a',
      },
      links: {
        self: 'https://api.unsplash.com/photos/black-pug-with-gray-knit-scarf-Mv9hjnEUHR4',
        html: 'https://unsplash.com/photos/black-pug-with-gray-knit-scarf-Mv9hjnEUHR4',
        download:
          'https://unsplash.com/photos/Mv9hjnEUHR4/download?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw4fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA',
        download_location:
          'https://api.unsplash.com/photos/Mv9hjnEUHR4/download?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw4fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA',
      },
      likes: 3491,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {
        animals: {
          status: 'approved',
          approved_on: '2024-12-18T15:06:48Z',
        },
        ugc: {
          status: 'rejected',
        },
      },
      asset_type: 'photo',
      user: {
        id: 'mA08QQzQf8Y',
        updated_at: '2025-08-14T14:29:55Z',
        username: 'charlesdeluvio',
        name: 'charlesdeluvio',
        first_name: 'charlesdeluvio',
        last_name: null,
        twitter_username: null,
        portfolio_url: null,
        bio: 'Graphic designer',
        location: 'Montreal',
        links: {
          self: 'https://api.unsplash.com/users/charlesdeluvio',
          html: 'https://unsplash.com/@charlesdeluvio',
          photos: 'https://api.unsplash.com/users/charlesdeluvio/photos',
          likes: 'https://api.unsplash.com/users/charlesdeluvio/likes',
          portfolio: 'https://api.unsplash.com/users/charlesdeluvio/portfolio',
        },
        profile_image: {
          small:
            'https://images.unsplash.com/profile-1515694660956-9133b2f53e3b?ixlib=rb-4.1.0&crop=faces&fit=crop&w=32&h=32',
          medium:
            'https://images.unsplash.com/profile-1515694660956-9133b2f53e3b?ixlib=rb-4.1.0&crop=faces&fit=crop&w=64&h=64',
          large:
            'https://images.unsplash.com/profile-1515694660956-9133b2f53e3b?ixlib=rb-4.1.0&crop=faces&fit=crop&w=128&h=128',
        },
        instagram_username: null,
        total_collections: 136,
        total_likes: 5285,
        total_photos: 672,
        total_promoted_photos: 294,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: null,
          portfolio_url: null,
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: 'DziZIYOGAHc',
      slug: 'black-pug-wearing-striped-apparel-DziZIYOGAHc',
      alternative_slugs: {
        en: 'black-pug-wearing-striped-apparel-DziZIYOGAHc',
        es: 'pug-negro-con-ropa-a-rayas-DziZIYOGAHc',
        ja: '縞模様のアパレルを着た黒いパグ-DziZIYOGAHc',
        fr: 'carlin-noir-portant-des-vetements-rayes-DziZIYOGAHc',
        it: 'carlino-nero-che-indossa-abbigliamento-a-righe-DziZIYOGAHc',
        ko: '줄무늬-의류를-입은-블랙-퍼그-DziZIYOGAHc',
        de: 'schwarzer-mops-tragt-gestreifte-kleidung-DziZIYOGAHc',
        pt: 'pug-preto-vestindo-roupas-listradas-DziZIYOGAHc',
        id: 'pug-hitam-mengenakan-pakaian-bergaris-DziZIYOGAHc',
      },
      created_at: '2018-01-31T18:31:36Z',
      updated_at: '2025-08-19T12:44:01Z',
      promoted_at: '2018-02-01T09:02:58Z',
      width: 2683,
      height: 3469,
      color: '#c00c0c',
      blur_hash: 'LZIBJ.v#[=oLz=TIS2af}FRkJRoL',
      description: 'Doggy with style. (instagram.com/toshi.dog/)',
      alt_description: 'black pug wearing striped apparel',
      breadcrumbs: [],
      urls: {
        raw: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw5fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0',
        full: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw5fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=85',
        regular:
          'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw5fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        small:
          'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw5fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=400',
        thumb:
          'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw5fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA&ixlib=rb-4.1.0&q=80&w=200',
        small_s3:
          'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1517423440428-a5a00ad493e8',
      },
      links: {
        self: 'https://api.unsplash.com/photos/black-pug-wearing-striped-apparel-DziZIYOGAHc',
        html: 'https://unsplash.com/photos/black-pug-wearing-striped-apparel-DziZIYOGAHc',
        download:
          'https://unsplash.com/photos/DziZIYOGAHc/download?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw5fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA',
        download_location:
          'https://api.unsplash.com/photos/DziZIYOGAHc/download?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHw5fHxkb2d8ZW58MHx8fHwxNzU1NjE3NzMxfDA',
      },
      likes: 2337,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {
        animals: {
          status: 'approved',
          approved_on: '2020-04-06T14:20:16Z',
        },
      },
      asset_type: 'photo',
      user: {
        id: 'mA08QQzQf8Y',
        updated_at: '2025-08-14T14:29:55Z',
        username: 'charlesdeluvio',
        name: 'charlesdeluvio',
        first_name: 'charlesdeluvio',
        last_name: null,
        twitter_username: null,
        portfolio_url: null,
        bio: 'Graphic designer',
        location: 'Montreal',
        links: {
          self: 'https://api.unsplash.com/users/charlesdeluvio',
          html: 'https://unsplash.com/@charlesdeluvio',
          photos: 'https://api.unsplash.com/users/charlesdeluvio/photos',
          likes: 'https://api.unsplash.com/users/charlesdeluvio/likes',
          portfolio: 'https://api.unsplash.com/users/charlesdeluvio/portfolio',
        },
        profile_image: {
          small:
            'https://images.unsplash.com/profile-1515694660956-9133b2f53e3b?ixlib=rb-4.1.0&crop=faces&fit=crop&w=32&h=32',
          medium:
            'https://images.unsplash.com/profile-1515694660956-9133b2f53e3b?ixlib=rb-4.1.0&crop=faces&fit=crop&w=64&h=64',
          large:
            'https://images.unsplash.com/profile-1515694660956-9133b2f53e3b?ixlib=rb-4.1.0&crop=faces&fit=crop&w=128&h=128',
        },
        instagram_username: null,
        total_collections: 136,
        total_likes: 5285,
        total_photos: 672,
        total_promoted_photos: 294,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: null,
          portfolio_url: null,
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: 'pgUbpDLJh3E',
      slug: 'selective-focus-photography-of-golden-labrador-retriever-pgUbpDLJh3E',
      alternative_slugs: {
        en: 'selective-focus-photography-of-golden-labrador-retriever-pgUbpDLJh3E',
        es: 'fotografia-de-enfoque-selectivo-del-labrador-golden-retriever-pgUbpDLJh3E',
        ja: 'ゴールデンラブラドールレトリバーのセレクティブフォーカス撮影-pgUbpDLJh3E',
        fr: 'photographie-selective-de-mise-au-point-du-labrador-golden-retriever-pgUbpDLJh3E',
        it: 'fotografia-a-fuoco-selettiva-del-labrador-retriever-dorato-pgUbpDLJh3E',
        ko: '골든-래브라도-리트리버의-선택적-초점-사진-pgUbpDLJh3E',
        de: 'selektive-fokusfotografie-des-golden-labrador-retrievers-pgUbpDLJh3E',
        pt: 'fotografia-de-foco-seletivo-do-labrador-retriever-dourado-pgUbpDLJh3E',
        id: 'fotografi-fokus-selektif-dari-golden-labrador-retriever-pgUbpDLJh3E',
      },
      created_at: '2015-01-29T20:58:48Z',
      updated_at: '2025-08-19T12:44:06Z',
      promoted_at: '2015-01-29T20:58:48Z',
      width: 5184,
      height: 3456,
      color: '#d9d9d9',
      blur_hash: 'LVKv]b9H5X-.%%IUofNIo}ROn#oe',
      description: 'Golden retriever dog',
      alt_description: 'selective focus photography of golden Labrador retriever',
      breadcrumbs: [],
      urls: {
        raw: 'https://images.unsplash.com/photo-1422565096762-bdb997a56a84?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwxMHx8ZG9nfGVufDB8fHx8MTc1NTYxNzczMXww&ixlib=rb-4.1.0',
        full: 'https://images.unsplash.com/photo-1422565096762-bdb997a56a84?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwxMHx8ZG9nfGVufDB8fHx8MTc1NTYxNzczMXww&ixlib=rb-4.1.0&q=85',
        regular:
          'https://images.unsplash.com/photo-1422565096762-bdb997a56a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwxMHx8ZG9nfGVufDB8fHx8MTc1NTYxNzczMXww&ixlib=rb-4.1.0&q=80&w=1080',
        small:
          'https://images.unsplash.com/photo-1422565096762-bdb997a56a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwxMHx8ZG9nfGVufDB8fHx8MTc1NTYxNzczMXww&ixlib=rb-4.1.0&q=80&w=400',
        thumb:
          'https://images.unsplash.com/photo-1422565096762-bdb997a56a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwxMHx8ZG9nfGVufDB8fHx8MTc1NTYxNzczMXww&ixlib=rb-4.1.0&q=80&w=200',
        small_s3:
          'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1422565096762-bdb997a56a84',
      },
      links: {
        self: 'https://api.unsplash.com/photos/selective-focus-photography-of-golden-labrador-retriever-pgUbpDLJh3E',
        html: 'https://unsplash.com/photos/selective-focus-photography-of-golden-labrador-retriever-pgUbpDLJh3E',
        download:
          'https://unsplash.com/photos/pgUbpDLJh3E/download?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwxMHx8ZG9nfGVufDB8fHx8MTc1NTYxNzczMXww',
        download_location:
          'https://api.unsplash.com/photos/pgUbpDLJh3E/download?ixid=M3w3OTM5OTJ8MHwxfHNlYXJjaHwxMHx8ZG9nfGVufDB8fHx8MTc1NTYxNzczMXww',
      },
      likes: 605,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      asset_type: 'photo',
      user: {
        id: 'R0TLZTU1YrI',
        updated_at: '2025-02-11T21:07:50Z',
        username: 'calebjamesfisher',
        name: 'Caleb Fisher',
        first_name: 'Caleb',
        last_name: 'Fisher',
        twitter_username: 'calebjfisher',
        portfolio_url: null,
        bio: 'Texas-born content creator currently working for the United States Senate in Washington, D.C.',
        location: 'Washington, DC',
        links: {
          self: 'https://api.unsplash.com/users/calebjamesfisher',
          html: 'https://unsplash.com/@calebjamesfisher',
          photos: 'https://api.unsplash.com/users/calebjamesfisher/photos',
          likes: 'https://api.unsplash.com/users/calebjamesfisher/likes',
          portfolio: 'https://api.unsplash.com/users/calebjamesfisher/portfolio',
          following: 'https://api.unsplash.com/users/calebjamesfisher/following',
          followers: 'https://api.unsplash.com/users/calebjamesfisher/followers',
        },
        profile_image: {
          small:
            'https://images.unsplash.com/profile-1573685337174-31958d889436image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
          medium:
            'https://images.unsplash.com/profile-1573685337174-31958d889436image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
          large:
            'https://images.unsplash.com/profile-1573685337174-31958d889436image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
        },
        instagram_username: 'calebjfisher',
        total_collections: 1,
        total_likes: 2,
        total_photos: 126,
        total_promoted_photos: 34,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: 'calebjfisher',
          portfolio_url: null,
          twitter_username: 'calebjfisher',
          paypal_email: null,
        },
      },
    },
  ],
};

function App() {
  const [query, setQuery] = useState('');

  console.log(query);

  return (
    <>
      <SearchBar onSetQuery={setQuery} />
      <ImageGallery images={tempData.results} />
      <LoadMoreBtn />
    </>
  );
}

export default App;
