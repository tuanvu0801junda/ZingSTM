INSERT INTO `album` (`albumId`, `artworkPath`, `title`, `created_at`, `updated_at`) VALUES
(1, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FAlbumImages%2FEm-la-con-thuyen-co-don.jpg?alt=media&token=25a86fbd-7c6a-460b-9e8f-d8f48e7961d9', 'Em là con thuyền cô đơn', NULL, NULL),
(2, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FAlbumImages%2FHat%20cho%20em.jpg?alt=media&token=912d2d4d-06a9-44e6-988f-3debcd826f28', 'Hát cho em', NULL, NULL),
(3, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FAlbumImages%2FHoang%20de%20co%20doc.jpg?alt=media&token=b126d77c-cf9b-42c7-b468-dfd225195d4d', 'Hoàng đế cô độc', NULL, NULL),
(4, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FAlbumImages%2FKiep-nay-em-ga-cho-anh.jpg?alt=media&token=141f3722-4780-4850-9626-67f5a973e9c0', 'Kiếp này em gả cho anh', NULL, NULL),
(5, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FAlbumImages%2FLalahay.jpg?alt=media&token=b8cefb04-b60d-4602-b8b0-5a6ba070d0e1', 'LayLaLay', NULL, NULL),
(6, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FAlbumImages%2FMTP-album.jpg?alt=media&token=0e6b8baf-1444-4df0-a92c-291d6cdb7170', 'M-TP HIT', NULL, NULL),
(7, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FAlbumImages%2FMot-ngay-duoc-yeu.jpg?alt=media&token=95605926-fd62-4d8e-af31-18401f23fdad', 'Một ngày ta được yêu', NULL, NULL),
(8, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FAlbumImages%2FDen-Vau.jpg?alt=media&token=caff19cb-05d6-46de-90e2-1f5b8b981c2d', 'Đen Vâu HIT', NULL, NULL),
(9, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FTop%20EDM.jpg?alt=media&token=93695710-962f-459b-afe3-3c498961eb62', 'Top EDM', '2021-12-26 01:30:40', '2021-12-26 01:30:40'),
(10, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FTop%20RAP.jpg?alt=media&token=256ad1b6-af94-4f39-a2f7-fd8bb58cb6fa', 'Top RAP', '2021-12-26 01:59:31', '2021-12-26 01:59:31'),
(12, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FTop%20J-POP.png?alt=media&token=f91fa6dc-954b-4360-90ff-c6a03a806f5a', 'Top J-POP', '2021-12-26 02:03:22', '2021-12-26 02:03:22'),
(13, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FHard%20Rock.jpg?alt=media&token=e68ac29b-6fb2-49ad-bbb5-976d266f9ce5', 'Hard Rock', '2021-12-26 02:10:42', '2021-12-26 02:10:42');

-- --------------------------------------------------------

INSERT INTO `artist` (`artistId`, `artistName`, `created_at`, `updated_at`, `artistImage`) VALUES
(1, 'Thái Học', NULL, NULL, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FArtistImage%2FThai-Hoc.jpg?alt=media&token=04bf7bc7-e39d-4134-a3d0-360958d9c5d2'),
(2, 'AMEE', NULL, NULL, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FArtistImage%2FAmee.jpg?alt=media&token=9da17172-1f7c-4fad-b86e-2bb2a994f697'),
(3, 'Binz', NULL, NULL, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FArtistImage%2FBinz.jpg?alt=media&token=af6f4725-32cc-45a8-b2ae-b13030ab87d5'),
(4, 'Đen Vâu', NULL, NULL, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FArtistImage%2FDen%20Vau.jpg?alt=media&token=e15effc2-9b2c-4937-878a-42318e108f4f'),
(5, 'Sơn Tùng M-TP', NULL, NULL, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FArtistImage%2FSon%20Tung.jpg?alt=media&token=2204ecba-bc25-4749-9a6f-25cbce2abf1a'),
(6, 'Isaac', NULL, NULL, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FArtistImage%2FIsaac.jpg?alt=media&token=f4e64f79-92e8-43ca-b7af-7677ba76ad1d'),
(7, 'Khánh Phương', NULL, NULL, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FArtistImage%2FKhanh%20Phuong.jpg?alt=media&token=2033cffa-94d5-4afa-a5fa-cc7cf4d38deb'),
(8, 'Jack', NULL, NULL, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FArtistImage%2FJack.jpg?alt=media&token=6fe9220c-91e4-4ed7-b2ae-217e13a50259'),
(9, 'Đức Tuấn', NULL, NULL, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FArtistImage%2FDuc%20Tuan.jpg?alt=media&token=182593e9-adb8-4e84-88b2-6e6b232aa651'),
(10, 'Kenshi Yonezu', NULL, NULL, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FArtistImage%2FKenshi%20Yonezu.jpg?alt=media&token=03c04ee6-980f-4c70-871c-839902d5b894'),
(11, 'Sia', '2021-12-26 01:45:26', '2021-12-26 01:45:26', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FSia.jpg?alt=media&token=04bda29a-f3af-4d10-9058-1b449a6968ae'),
(12, 'Ampyx', '2021-12-26 01:45:53', '2021-12-26 01:45:53', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FAmpyx.jpg?alt=media&token=cd02d168-86d4-42a8-b814-90b0b10836f8'),
(13, 'Amadeus', '2021-12-26 01:46:11', '2021-12-26 01:46:11', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FAmadeus.jpg?alt=media&token=0fda26fb-9a87-4301-bdf8-2001778ad440'),
(14, 'Naron', '2021-12-26 01:46:22', '2021-12-26 01:46:22', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FNaron.jpg?alt=media&token=44412e41-d70a-4675-85f4-5bd3634f6235'),
(15, 'Gravel Switch', '2021-12-26 02:13:51', '2021-12-26 02:13:51', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FGravel%20Switch.jpg?alt=media&token=fcb191ea-a778-4fc6-aec6-9ab826c07ff3');

-- --------------------------------------------------------

INSERT INTO `genre` (`genreId`, `genreImage`, `genreName`, `created_at`, `updated_at`) VALUES
(1, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FGenreImages%2FEDM.jpg?alt=media&token=dcf2f2e9-5fc7-464f-a2dd-66016055d0e9', 'EDM', NULL, NULL),
(2, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FGenreImages%2FJ-POP.png?alt=media&token=d754d890-7db7-4953-bc78-f2fc1815c9bf', 'J-POP', NULL, NULL),
(3, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FGenreImages%2FRAP.jpg?alt=media&token=5b2ce027-65f2-4e27-9258-c21f42272e16', 'RAP', NULL, NULL),
(4, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FGenreImages%2FV-POP.jpg?alt=media&token=02bafd91-d5bf-40b1-b574-0734d0626664', 'V-POP', NULL, NULL),
(5, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FGenreImages%2FLove%20Song.jpg?alt=media&token=1128f760-4375-4251-9edb-e59b7b141cf7', 'Love', NULL, NULL),
(6, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FGenreImages%2FJazz.png?alt=media&token=0d6bcccc-36f5-4377-949a-2d88e5d5978f', 'Jazz', NULL, NULL),
(7, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FGenreImages%2FRock.png?alt=media&token=218a6950-4332-4e1d-8d16-7ed8ff63e0c8', 'Rock', NULL, NULL);


-- --------------------------------------------------------

INSERT INTO `song` (`songId`, `albumId`, `imagePath`, `songPath`, `playTimes`, `title`, `duration`, `created_at`, `updated_at`) VALUES
(1, 1, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FEm%20la%20con%20thuyen%20co%20don.png?alt=media&token=1d00ff2d-7351-4e60-b580-8f5137d70033', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FEm%20La%20Con%20Thuyen%20Co%20Don.mp3?alt=media&token=5566e2d1-aece-472e-94ea-c1a83c30c003', 0, 'Em là con thuyền cô đơn', '5:05', '2021-12-25 20:30:03', '2021-12-25 20:30:03'),
(2, 2, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FToi%20da%20quen%20that%20roi.jpg?alt=media&token=c80305c3-d2fe-4829-8ed2-71a75c446a8f', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FToi%20da%20quen%20that%20roi.mp3?alt=media&token=4a967b86-b65b-42b3-8588-5c2eb25d34d5', 0, 'Tôi đã quên thật rồi', '5:18', '2021-12-25 20:47:07', '2021-12-25 20:47:07'),
(3, 2, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FDau%20dau.jpg?alt=media&token=3cc047bb-22c0-423c-aada-516c1e6f4245', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FDau%20dau.mp3?alt=media&token=0d6e4154-08cd-41c5-af7c-2afca599b6e5', 0, 'Đau đầu', '4:10', '2021-12-25 20:48:00', '2021-12-25 20:48:00'),
(4, 2, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FYeu%20dai%20kho.jpg?alt=media&token=59460f2e-f679-444f-bd15-0c17779d6562', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FYeu%20dai%20kho.mp3?alt=media&token=b4bb7002-1086-4186-8fec-0cdb7a187140', 0, 'Yêu dại khờ', '5:9', '2021-12-25 20:48:38', '2021-12-25 20:48:38'),
(5, 2, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FAnh%20yeu%20em%20nhieu%20lam.jpg?alt=media&token=1a6b1e3b-0afe-45ef-ae39-219ddb2763fc', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FAnh%20yeu%20em%20nhieu%20lam.mp3?alt=media&token=ca1d8624-3c33-4c64-94fe-98efce6f8c01', 0, 'Anh yêu em nhiều lắm', '4:34', '2021-12-25 20:49:24', '2021-12-25 20:49:24'),
(6, 2, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FYeu%20lam%20chi.jpg?alt=media&token=d4b204c6-97b5-43e8-899d-7cc391bbbc20', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FYeu%20lam%20chi.mp3?alt=media&token=044a044d-20f5-4494-b116-61c6640a07fb', 0, 'Yêu làm chi', '3:49', '2021-12-25 20:50:08', '2021-12-25 20:50:08'),
(7, 3, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FHoang%20de%20co%20doc.jpg?alt=media&token=efc6e55c-6fa2-400e-a6b4-12f5dc45331a', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FHoang%20de%20co%20doc.mp3?alt=media&token=6d071ee1-d30d-41b1-b49c-31954bcfe33b', 0, 'Hoàng đế cô độc', '3:19', '2021-12-25 20:55:13', '2021-12-25 20:55:13'),
(8, 4, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FKiep%20nay%20em%20ga%20cho%20anh.jpg?alt=media&token=faaade42-495b-4dc0-98d0-54d8e07824c8', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FKiep%20nay%20em%20ga%20cho%20anh.mp3?alt=media&token=e3a91a6a-2be5-4b80-90fd-9b44f9b77655', 0, 'Kiếp này em gả cho anh', '5:21', '2021-12-25 20:58:27', '2021-12-25 20:58:27'),
(9, 5, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FLaylalay.jpg?alt=media&token=a4819b0b-f960-4071-b532-493b1be07aee', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FLaylalay.mp3?alt=media&token=08d4197f-c996-4451-99b3-92b811d4e5a1', 0, 'Laylalay', '3:52', '2021-12-25 21:01:16', '2021-12-25 21:01:16'),
(10, 6, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FChung%20ta%20khong%20thuoc%20ve%20nhau.jpg?alt=media&token=3413fc21-a533-434a-87ed-239d269edc25', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FChung%20ta%20khong%20thuoc%20ve%20nhau.mp3?alt=media&token=d4c042ae-977a-454d-b5fa-554fcf39be6d', 0, 'Chúng ta không thuộc về nhau', '3:54', '2021-12-25 21:12:41', '2021-12-25 21:16:04'),
(11, 6, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FEm%20cua%20ngay%20hom%20qua.jpg?alt=media&token=885742dc-ad9a-4c44-9d2a-d66bd394c0fa', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FEm%20cua%20ngay%20hom%20qua.mp3?alt=media&token=47020cc6-aa0d-482f-87db-682735dfe398', 0, 'Em của ngày hôm qua', '4:55', '2021-12-25 21:16:51', '2021-12-25 21:16:51'),
(12, 6, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FHay%20trao%20cho%20anh.jpg?alt=media&token=8d86ae9d-6f39-4e8a-9857-f32afa651831', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FHay%20trao%20cho%20anh.mp3?alt=media&token=92104247-3451-4a87-a583-516497308e1d', 0, 'Hãy trao cho anh', '4:06', '2021-12-25 21:20:59', '2021-12-25 21:20:59'),
(13, 6, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FLac%20troi.jpg?alt=media&token=4ec3e8e8-4726-4a2c-92e1-d8dfcfbb6988', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FLac%20troi.mp3?alt=media&token=e445495b-87fd-4944-9561-8f7f76ddd665', 0, 'Lạc trôi', '3:53', '2021-12-25 21:26:04', '2021-12-25 21:26:04'),
(14, 7, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FHan%20mac%20tu.jpg?alt=media&token=4b53c9da-236e-47e4-8980-6d0d0a506adc', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FHan%20mac%20tu.mp3?alt=media&token=25689745-9709-44f5-a2e0-594094e3a88d', 0, 'Hàn mặc tử', '6:30', '2021-12-25 21:34:06', '2021-12-25 21:34:06'),
(15, 7, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FHoa%20trinh%20nu.jpg?alt=media&token=70a6d320-b1e5-4bba-989b-d95d4c116ed3', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FHoa%20trinh%20nu.mp3?alt=media&token=25aaa9fe-6d1c-4054-8c82-4e4e6d59d8a5', 0, 'Hoa trinh nữ', '6:22', '2021-12-25 21:34:54', '2021-12-25 21:34:54'),
(16, 7, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FTren%20dinh%20mua%20dong.jpg?alt=media&token=71c1f3e4-862d-40f5-928a-d6c25d8fb3d5', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FTren%20dinh%20mua%20dong.mp3?alt=media&token=b298d49d-0704-4a29-a613-1498664bbaf6', 0, 'Trên đỉnh mùa đông', '4:55', '2021-12-25 21:35:41', '2021-12-25 21:35:41'),
(17, 8, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FLoi%20nho.jpg?alt=media&token=f0eb851e-3123-484d-962e-dd275350eef4', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FLoi%20nho.mp3?alt=media&token=0f1d1e12-caf3-4e9f-8d39-d95ee9dce352', 0, 'Lối nhỏ', '4:13', '2021-12-25 21:47:45', '2021-12-25 21:47:45'),
(18, 8, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FBai%20nay%20chill%20phet.jpg?alt=media&token=23129398-e30a-4754-9278-72635acf4a62', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FBai%20nay%20chill%20phet.mp3?alt=media&token=5e6af8ec-cf9d-4499-b515-593ff56512fe', 0, 'Bài này chill phết', '4:37', '2021-12-25 21:48:37', '2021-12-25 21:48:37'),
(19, 8, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FHai%20trieu%20nam.jpg?alt=media&token=06a0e8cc-b43a-4263-a968-a46ca93a8af5', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FHai%20trieu%20nam.mp3?alt=media&token=79a6c1fe-9078-4b44-a228-ad86064dc3d0', 0, 'Hai triệu năm', '3:38', '2021-12-25 21:49:18', '2021-12-25 21:49:18'),
(20, 9, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FUnstoppable.jpg?alt=media&token=be323a03-3af8-4bdf-b8f4-2ccf2749226d', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FUnstoppable.mp3?alt=media&token=a8612e83-4421-4ef0-b365-62c0b3a86a77', 0, 'Unstoppable', '4:07', '2021-12-26 01:52:33', '2021-12-26 01:52:33'),
(21, 9, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FRise.jpg?alt=media&token=1bd687ce-dc08-4644-a246-7a21e2bb76a5', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FRise.mp3?alt=media&token=e2317f13-52f7-4bc9-8dd0-12d7be8b49b6', 0, 'Rise', '3:48', '2021-12-26 01:53:15', '2021-12-26 01:53:15'),
(22, 9, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FLegendary.jpg?alt=media&token=6f86ad81-4c89-4ad7-b5fd-f03243e29a91', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FLegendary.mp3?alt=media&token=797dde60-7dd0-4155-8ff7-70a60b87727e', 0, 'Legendary', '4:02', '2021-12-26 01:54:05', '2021-12-26 01:54:05'),
(23, 9, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FImagination.jpg?alt=media&token=4f8ead05-979d-46f3-bc82-df5b1da3c5a1', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FImagination.mp3?alt=media&token=ac26cb72-a053-4f12-a7bd-cb0425e51dbb', 0, 'Imagination', '4:11', '2021-12-26 01:55:03', '2021-12-26 01:55:03'),
(24, 12, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FLemon.jpg?alt=media&token=6a7a7b2c-491f-4938-b621-1f2df45b675c', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FLemon.mp3?alt=media&token=2e8bb6ca-ae1f-4917-a1c5-cd17cb779fa1', 0, 'Lemon', '4:16', '2021-12-26 02:07:16', '2021-12-26 02:07:16'),
(25, 13, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FYou%20make%20me%20weak.jpg?alt=media&token=b6595fd2-e12a-4b9f-8520-90c1fa17bcb1', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FYou%20make%20me%20weak.mp3?alt=media&token=41ded5fb-b017-472c-8289-949bb68111dc', 0, 'You make me weak', '3:50', '2021-12-26 02:15:46', '2021-12-26 02:15:46'),
(26, 10, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FTinh%20ban%20dieu%20ki.jpg?alt=media&token=11fdd8a4-1995-47c6-bd4e-77b3385fd17d', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FTinh%20ban%20dieu%20ki.mp3?alt=media&token=fa550214-e8eb-4634-92a8-13d329d210bf', 0, 'Tình bạn diệu kỳ', '3:13', '2021-12-26 02:23:58', '2021-12-26 02:23:58'),
(27, 10, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FBIGCITYBOI.jpg?alt=media&token=0586aec1-d6f2-4bbb-8070-0c3cf55f8e9c', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FBIGCITYBOI.mp3?alt=media&token=95d0e2ac-3f52-48a9-9942-af7f43ee4bd3', 0, 'BIGCITYBOI', '3:44', '2021-12-26 02:25:10', '2021-12-26 02:25:10'),
(28, 10, 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FSongImages%2FKrazy.jpg?alt=media&token=83454167-d225-4b89-acda-58836c1b747c', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Songs%2FKrazy.mp3?alt=media&token=cc1eba9d-cfbb-454f-9eb8-fad10c788b41', 0, 'Krazy', '4:36', '2021-12-26 02:25:55', '2021-12-26 02:25:55');

-- --------------------------------------------------------

INSERT INTO `songartistrelation` (`songId`, `artistId`, `created_at`, `updated_at`) VALUES
(1, 1, '2021-12-25 20:30:03', '2021-12-25 20:30:03'),
(2, 6, '2021-12-25 20:47:08', '2021-12-25 20:47:08'),
(3, 6, '2021-12-25 20:48:00', '2021-12-25 20:48:00'),
(4, 6, '2021-12-25 20:48:39', '2021-12-25 20:48:39'),
(5, 6, '2021-12-25 20:49:24', '2021-12-25 20:49:24'),
(6, 6, '2021-12-25 20:50:09', '2021-12-25 20:50:09'),
(7, 7, '2021-12-25 20:55:13', '2021-12-25 20:55:13'),
(8, 1, '2021-12-25 20:58:28', '2021-12-25 20:58:28'),
(9, 8, '2021-12-25 21:01:17', '2021-12-25 21:01:17'),
(10, 5, '2021-12-25 21:12:41', '2021-12-25 21:12:41'),
(11, 5, '2021-12-25 21:16:52', '2021-12-25 21:16:52'),
(12, 5, '2021-12-25 21:21:00', '2021-12-25 21:21:00'),
(13, 5, '2021-12-25 21:26:05', '2021-12-25 21:26:05'),
(14, 9, '2021-12-25 21:34:07', '2021-12-25 21:34:07'),
(15, 9, '2021-12-25 21:34:54', '2021-12-25 21:34:54'),
(16, 9, '2021-12-25 21:35:41', '2021-12-25 21:35:41'),
(17, 4, '2021-12-25 21:47:45', '2021-12-25 21:47:45'),
(18, 4, '2021-12-25 21:48:37', '2021-12-25 21:48:37'),
(19, 4, '2021-12-25 21:49:19', '2021-12-25 21:49:19'),
(20, 11, '2021-12-26 01:52:34', '2021-12-26 01:52:34'),
(21, 12, '2021-12-26 01:53:16', '2021-12-26 01:53:16'),
(22, 13, '2021-12-26 01:54:05', '2021-12-26 01:54:05'),
(23, 14, '2021-12-26 01:55:03', '2021-12-26 01:55:03'),
(24, 10, '2021-12-26 02:07:16', '2021-12-26 02:07:16'),
(25, 15, '2021-12-26 02:15:46', '2021-12-26 02:15:46'),
(26, 2, '2021-12-26 02:23:59', '2021-12-26 02:23:59'),
(27, 3, '2021-12-26 02:25:10', '2021-12-26 02:25:10'),
(28, 3, '2021-12-26 02:25:56', '2021-12-26 02:25:56');

-- --------------------------------------------------------

INSERT INTO `songgenrerelation` (`songId`, `genreId`, `created_at`, `updated_at`) VALUES
(1, 5, NULL, NULL),
(2, 5, NULL, NULL),
(3, 4, NULL, NULL),
(4, 5, NULL, NULL),
(5, 5, NULL, NULL),
(6, 5, NULL, NULL),
(7, 4, NULL, NULL),
(8, 5, NULL, NULL),
(9, 4, NULL, NULL),
(10, 4, NULL, NULL),
(11, 4, NULL, NULL),
(12, 4, NULL, NULL),
(13, 4, NULL, NULL),
(14, 5, NULL, NULL),
(15, 5, NULL, NULL),
(16, 6, NULL, NULL),
(17, 3, NULL, NULL),
(18, 3, NULL, NULL),
(19, 3, NULL, NULL),
(20, 1, NULL, NULL),
(21, 1, NULL, NULL),
(22, 1, NULL, NULL),
(23, 1, NULL, NULL),
(24, 2, NULL, NULL),
(25, 7, NULL, NULL),
(26, 3, NULL, NULL),
(27, 3, NULL, NULL),
(28, 3, NULL, NULL);

-- --------------------------------------------------------

INSERT INTO `user` (`userId`, `email`, `fullname`, `password`, `profilePic`, `role`, `username`, `created_at`, `updated_at`) VALUES
(1, 'quan.td184178@sis.hust.edu.vn', 'Trần Đức Quân', '$2y$10$5PPb1uQvm64/epnCFQc0fe40dvWVpD/OPRTUhalryzwNVBwf0VD8K', 'https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FAvatarImages%2FRita3.png?alt=media&token=94f18903-8047-4933-acd9-9991a48a20ef', 2, 'superadmin', '2021-12-25 18:57:30', '2021-12-25 18:57:48');