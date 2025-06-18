/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Error {
  /** @default false */
  ok: boolean;
  error_code: number;
  description: string;
  /** Contains information about why a request was unsuccessful. */
  parameters?: ResponseParameters;
}

/**
 * This [object](https://core.telegram.org/bots/api/#available-types) represents an incoming update.
 * At most **one** of the optional parameters can be present in any given update.
 */
export interface Update {
  /** The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This ID becomes especially handy if you're using [Webhooks](https://core.telegram.org/bots/api/#setwebhook), since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially. */
  update_id: number;
  /** This object represents a message. */
  message?: Message;
  /** This object represents a message. */
  edited_message?: Message;
  /** This object represents a message. */
  channel_post?: Message;
  /** This object represents a message. */
  edited_channel_post?: Message;
  /** This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results. */
  inline_query?: InlineQuery;
  /** Represents a [result](https://core.telegram.org/bots/api/#inlinequeryresult) of an inline query that was chosen by the user and sent to their chat partner. */
  chosen_inline_result?: ChosenInlineResult;
  /** This object represents an incoming callback query from a callback button in an [inline keyboard](/bots#inline-keyboards-and-on-the-fly-updating). If the button that originated the query was attached to a message sent by the bot, the field *message* will be present. If the button was attached to a message sent via the bot (in [inline mode](https://core.telegram.org/bots/api/#inline-mode)), the field *inline\_message\_id* will be present. Exactly one of the fields *data* or *game\_short\_name* will be present. */
  callback_query?: CallbackQuery;
  /** This object contains information about an incoming shipping query. */
  shipping_query?: ShippingQuery;
  /** This object contains information about an incoming pre-checkout query. */
  pre_checkout_query?: PreCheckoutQuery;
  /** This object contains information about a poll. */
  poll?: Poll;
  /** This object represents an answer of a user in a non-anonymous poll. */
  poll_answer?: PollAnswer;
}

/** Contains information about the current status of a webhook. */
export interface WebhookInfo {
  /** Webhook URL, may be empty if webhook is not set up */
  url: string;
  /** True, if a custom certificate was provided for webhook certificate checks */
  has_custom_certificate: boolean;
  /** Number of updates awaiting delivery */
  pending_update_count: number;
  /** *Optional*. Currently used webhook IP address */
  ip_address?: string;
  /** *Optional*. Unix time for the most recent error that happened when trying to deliver an update via webhook */
  last_error_date?: number;
  /** *Optional*. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook */
  last_error_message?: string;
  /** *Optional*. Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery */
  max_connections?: number;
  /** *Optional*. A list of update types the bot is subscribed to. Defaults to all update types */
  allowed_updates?: string[];
}

/** This object represents a Telegram user or bot. */
export interface User {
  /** Unique identifier for this user or bot */
  id: number;
  /** True, if this user is a bot */
  is_bot: boolean;
  /** User's or bot's first name */
  first_name: string;
  /** *Optional*. User's or bot's last name */
  last_name?: string;
  /** *Optional*. User's or bot's username */
  username?: string;
  /** *Optional*. [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) of the user's language */
  language_code?: string;
  /** *Optional*. True, if the bot can be invited to groups. Returned only in [getMe](https://core.telegram.org/bots/api/#getme). */
  can_join_groups?: boolean;
  /** *Optional*. True, if [privacy mode](https://core.telegram.org/bots#privacy-mode) is disabled for the bot. Returned only in [getMe](https://core.telegram.org/bots/api/#getme). */
  can_read_all_group_messages?: boolean;
  /** *Optional*. True, if the bot supports inline queries. Returned only in [getMe](https://core.telegram.org/bots/api/#getme). */
  supports_inline_queries?: boolean;
}

/** This object represents a chat. */
export interface Chat {
  /** Unique identifier for this chat. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. */
  id: number;
  /** Type of chat, can be either “private”, “group”, “supergroup” or “channel” */
  type: "private" | "group" | "supergroup" | "channel";
  /** *Optional*. Title, for supergroups, channels and group chats */
  title?: string;
  /** *Optional*. Username, for private chats, supergroups and channels if available */
  username?: string;
  /** *Optional*. First name of the other party in a private chat */
  first_name?: string;
  /** *Optional*. Last name of the other party in a private chat */
  last_name?: string;
  /** This object represents a chat photo. */
  photo?: ChatPhoto;
  /** *Optional*. Bio of the other party in a private chat. Returned only in [getChat](https://core.telegram.org/bots/api/#getchat). */
  bio?: string;
  /** *Optional*. Description, for groups, supergroups and channel chats. Returned only in [getChat](https://core.telegram.org/bots/api/#getchat). */
  description?: string;
  /** *Optional*. Chat invite link, for groups, supergroups and channel chats. Each administrator in a chat generates their own invite links, so the bot must first generate the link using [exportChatInviteLink](https://core.telegram.org/bots/api/#exportchatinvitelink). Returned only in [getChat](https://core.telegram.org/bots/api/#getchat). */
  invite_link?: string;
  /** This object represents a message. */
  pinned_message?: Message;
  /** Describes actions that a non-administrator user is allowed to take in a chat. */
  permissions?: ChatPermissions;
  /** *Optional*. For supergroups, the minimum allowed delay between consecutive messages sent by each unpriviledged user. Returned only in [getChat](https://core.telegram.org/bots/api/#getchat). */
  slow_mode_delay?: number;
  /** *Optional*. For supergroups, name of group sticker set. Returned only in [getChat](https://core.telegram.org/bots/api/#getchat). */
  sticker_set_name?: string;
  /** *Optional*. True, if the bot can change the group sticker set. Returned only in [getChat](https://core.telegram.org/bots/api/#getchat). */
  can_set_sticker_set?: boolean;
  /** *Optional*. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. Returned only in [getChat](https://core.telegram.org/bots/api/#getchat). */
  linked_chat_id?: number;
  /** Represents a location to which a chat is connected. */
  location?: ChatLocation;
}

/** This object represents a message. */
export interface Message {
  /** Unique message identifier inside this chat */
  message_id: number;
  /** This object represents a Telegram user or bot. */
  from?: User;
  /** This object represents a chat. */
  sender_chat?: Chat;
  /** Date the message was sent in Unix time */
  date: number;
  /** This object represents a chat. */
  chat: Chat;
  /** This object represents a Telegram user or bot. */
  forward_from?: User;
  /** This object represents a chat. */
  forward_from_chat?: Chat;
  /** *Optional*. For messages forwarded from channels, identifier of the original message in the channel */
  forward_from_message_id?: number;
  /** *Optional*. For messages forwarded from channels, signature of the post author if present */
  forward_signature?: string;
  /** *Optional*. Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages */
  forward_sender_name?: string;
  /** *Optional*. For forwarded messages, date the original message was sent in Unix time */
  forward_date?: number;
  /** This object represents a message. */
  reply_to_message?: Message;
  /** This object represents a Telegram user or bot. */
  via_bot?: User;
  /** *Optional*. Date the message was last edited in Unix time */
  edit_date?: number;
  /** *Optional*. The unique identifier of a media message group this message belongs to */
  media_group_id?: string;
  /** *Optional*. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator */
  author_signature?: string;
  /** *Optional*. For text messages, the actual UTF-8 text of the message, 0-4096 characters */
  text?: string;
  /** *Optional*. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text */
  entities?: MessageEntity[];
  /** This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound). */
  animation?: Animation;
  /** This object represents an audio file to be treated as music by the Telegram clients. */
  audio?: Audio;
  /** This object represents a general file (as opposed to [photos](https://core.telegram.org/bots/api/#photosize), [voice messages](https://core.telegram.org/bots/api/#voice) and [audio files](https://core.telegram.org/bots/api/#audio)). */
  document?: Document;
  /** *Optional*. Message is a photo, available sizes of the photo */
  photo?: PhotoSize[];
  /** This object represents a sticker. */
  sticker?: Sticker;
  /** This object represents a video file. */
  video?: Video;
  /** This object represents a [video message](https://telegram.org/blog/video-messages-and-telescope) (available in Telegram apps as of [v.4.0](https://telegram.org/blog/video-messages-and-telescope)). */
  video_note?: VideoNote;
  /** This object represents a voice note. */
  voice?: Voice;
  /** *Optional*. Caption for the animation, audio, document, photo, video or voice, 0-1024 characters */
  caption?: string;
  /** *Optional*. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption */
  caption_entities?: MessageEntity[];
  /** This object represents a phone contact. */
  contact?: Contact;
  /** This object represents an animated emoji that displays a random value. */
  dice?: Dice;
  /** This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers. */
  game?: Game;
  /** This object contains information about a poll. */
  poll?: Poll;
  /** This object represents a venue. */
  venue?: Venue;
  /** This object represents a point on the map. */
  location?: Location;
  /** *Optional*. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members) */
  new_chat_members?: User[];
  /** This object represents a Telegram user or bot. */
  left_chat_member?: User;
  /** *Optional*. A chat title was changed to this value */
  new_chat_title?: string;
  /** *Optional*. A chat photo was change to this value */
  new_chat_photo?: PhotoSize[];
  /** *Optional*. Service message: the chat photo was deleted */
  delete_chat_photo?: boolean;
  /** *Optional*. Service message: the group has been created */
  group_chat_created?: boolean;
  /** *Optional*. Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply\_to\_message if someone replies to a very first message in a directly created supergroup. */
  supergroup_chat_created?: boolean;
  /** *Optional*. Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply\_to\_message if someone replies to a very first message in a channel. */
  channel_chat_created?: boolean;
  /** *Optional*. The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. */
  migrate_to_chat_id?: number;
  /** *Optional*. The supergroup has been migrated from a group with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. */
  migrate_from_chat_id?: number;
  /** This object represents a message. */
  pinned_message?: Message;
  /** This object contains basic information about an invoice. */
  invoice?: Invoice;
  /** This object contains basic information about a successful payment. */
  successful_payment?: SuccessfulPayment;
  /** *Optional*. The domain name of the website on which the user has logged in. [More about Telegram Login »](/widgets/login) */
  connected_website?: string;
  /** Contains information about Telegram Passport data shared with the bot by the user. */
  passport_data?: PassportData;
  /** This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user. */
  proximity_alert_triggered?: ProximityAlertTriggered;
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
}

/** This object represents a unique message identifier. */
export interface MessageId {
  /** Unique message identifier */
  message_id: number;
}

/** This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc. */
export interface MessageEntity {
  /** Type of the entity. Can be “mention” (`@username`), “hashtag” (`#hashtag`), “cashtag” (`$USD`), “bot\_command” (`/start@jobs_bot`), “url” (`https://telegram.org`), “email” (`do-not-reply@telegram.org`), “phone\_number” (`+1-212-555-0123`), “bold” (**bold text**), “italic” (*italic text*), “underline” (underlined text), “strikethrough” (strikethrough text), “code” (monowidth string), “pre” (monowidth block), “text\_link” (for clickable text URLs), “text\_mention” (for users [without usernames](https://telegram.org/blog/edit#new-mentions)) */
  type:
    | "mention"
    | "hashtag"
    | "cashtag"
    | "bot_command"
    | "url"
    | "email"
    | "phone_number"
    | "bold"
    | "italic"
    | "underline"
    | "strikethrough"
    | "code"
    | "pre"
    | "text_link"
    | "text_mention";
  /** Offset in UTF-16 code units to the start of the entity */
  offset: number;
  /** Length of the entity in UTF-16 code units */
  length: number;
  /** *Optional*. For “text\_link” only, url that will be opened after user taps on the text */
  url?: string;
  /** This object represents a Telegram user or bot. */
  user?: User;
  /** *Optional*. For “pre” only, the programming language of the entity text */
  language?: string;
}

/** This object represents one size of a photo or a [file](https://core.telegram.org/bots/api/#document) / [sticker](https://core.telegram.org/bots/api/#sticker) thumbnail. */
export interface PhotoSize {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** Photo width */
  width: number;
  /** Photo height */
  height: number;
  /** *Optional*. File size */
  file_size?: number;
}

/** This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound). */
export interface Animation {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** Video width as defined by sender */
  width: number;
  /** Video height as defined by sender */
  height: number;
  /** Duration of the video in seconds as defined by sender */
  duration: number;
  /** This object represents one size of a photo or a [file](https://core.telegram.org/bots/api/#document) / [sticker](https://core.telegram.org/bots/api/#sticker) thumbnail. */
  thumb?: PhotoSize;
  /** *Optional*. Original animation filename as defined by sender */
  file_name?: string;
  /** *Optional*. MIME type of the file as defined by sender */
  mime_type?: string;
  /** *Optional*. File size */
  file_size?: number;
}

/** This object represents an audio file to be treated as music by the Telegram clients. */
export interface Audio {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** Duration of the audio in seconds as defined by sender */
  duration: number;
  /** *Optional*. Performer of the audio as defined by sender or by audio tags */
  performer?: string;
  /** *Optional*. Title of the audio as defined by sender or by audio tags */
  title?: string;
  /** *Optional*. Original filename as defined by sender */
  file_name?: string;
  /** *Optional*. MIME type of the file as defined by sender */
  mime_type?: string;
  /** *Optional*. File size */
  file_size?: number;
  /** This object represents one size of a photo or a [file](https://core.telegram.org/bots/api/#document) / [sticker](https://core.telegram.org/bots/api/#sticker) thumbnail. */
  thumb?: PhotoSize;
}

/** This object represents a general file (as opposed to [photos](https://core.telegram.org/bots/api/#photosize), [voice messages](https://core.telegram.org/bots/api/#voice) and [audio files](https://core.telegram.org/bots/api/#audio)). */
export interface Document {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** This object represents one size of a photo or a [file](https://core.telegram.org/bots/api/#document) / [sticker](https://core.telegram.org/bots/api/#sticker) thumbnail. */
  thumb?: PhotoSize;
  /** *Optional*. Original filename as defined by sender */
  file_name?: string;
  /** *Optional*. MIME type of the file as defined by sender */
  mime_type?: string;
  /** *Optional*. File size */
  file_size?: number;
}

/** This object represents a video file. */
export interface Video {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** Video width as defined by sender */
  width: number;
  /** Video height as defined by sender */
  height: number;
  /** Duration of the video in seconds as defined by sender */
  duration: number;
  /** This object represents one size of a photo or a [file](https://core.telegram.org/bots/api/#document) / [sticker](https://core.telegram.org/bots/api/#sticker) thumbnail. */
  thumb?: PhotoSize;
  /** *Optional*. Original filename as defined by sender */
  file_name?: string;
  /** *Optional*. Mime type of a file as defined by sender */
  mime_type?: string;
  /** *Optional*. File size */
  file_size?: number;
}

/** This object represents a [video message](https://telegram.org/blog/video-messages-and-telescope) (available in Telegram apps as of [v.4.0](https://telegram.org/blog/video-messages-and-telescope)). */
export interface VideoNote {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** Video width and height (diameter of the video message) as defined by sender */
  length: number;
  /** Duration of the video in seconds as defined by sender */
  duration: number;
  /** This object represents one size of a photo or a [file](https://core.telegram.org/bots/api/#document) / [sticker](https://core.telegram.org/bots/api/#sticker) thumbnail. */
  thumb?: PhotoSize;
  /** *Optional*. File size */
  file_size?: number;
}

/** This object represents a voice note. */
export interface Voice {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** Duration of the audio in seconds as defined by sender */
  duration: number;
  /** *Optional*. MIME type of the file as defined by sender */
  mime_type?: string;
  /** *Optional*. File size */
  file_size?: number;
}

/** This object represents a phone contact. */
export interface Contact {
  /** Contact's phone number */
  phone_number: string;
  /** Contact's first name */
  first_name: string;
  /** *Optional*. Contact's last name */
  last_name?: string;
  /** *Optional*. Contact's user identifier in Telegram */
  user_id?: number;
  /** *Optional*. Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard) */
  vcard?: string;
}

/** This object represents an animated emoji that displays a random value. */
export interface Dice {
  /** Emoji on which the dice throw animation is based */
  emoji: string;
  /** Value of the dice, 1-6 for “<img alt="🎲" src="//telegram.org/img/emoji/40/F09F8EB2.png" height="20" width="20" />” and “<img alt="🎯" src="//telegram.org/img/emoji/40/F09F8EAF.png" height="20" width="20" />” base emoji, 1-5 for “<img alt="🏀" src="//telegram.org/img/emoji/40/F09F8F80.png" height="20" width="20" />” and “<img alt="⚽" src="//telegram.org/img/emoji/40/E29ABD.png" height="20" width="20" />” base emoji, 1-64 for “<img alt="🎰" src="//telegram.org/img/emoji/40/F09F8EB0.png" height="20" width="20" />” base emoji */
  value: number;
}

/** This object contains information about one answer option in a poll. */
export interface PollOption {
  /** Option text, 1-100 characters */
  text: string;
  /** Number of users that voted for this option */
  voter_count: number;
}

/** This object represents an answer of a user in a non-anonymous poll. */
export interface PollAnswer {
  /** Unique poll identifier */
  poll_id: string;
  /** This object represents a Telegram user or bot. */
  user: User;
  /** 0-based identifiers of answer options, chosen by the user. May be empty if the user retracted their vote. */
  option_ids: number[];
}

/** This object contains information about a poll. */
export interface Poll {
  /** Unique poll identifier */
  id: string;
  /** Poll question, 1-255 characters */
  question: string;
  /** List of poll options */
  options: PollOption[];
  /** Total number of users that voted in the poll */
  total_voter_count: number;
  /** True, if the poll is closed */
  is_closed: boolean;
  /** True, if the poll is anonymous */
  is_anonymous: boolean;
  /** Poll type, currently can be “regular” or “quiz” */
  type: string;
  /** True, if the poll allows multiple answers */
  allows_multiple_answers: boolean;
  /** *Optional*. 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot. */
  correct_option_id?: number;
  /** *Optional*. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters */
  explanation?: string;
  /** *Optional*. Special entities like usernames, URLs, bot commands, etc. that appear in the *explanation* */
  explanation_entities?: MessageEntity[];
  /** *Optional*. Amount of time in seconds the poll will be active after creation */
  open_period?: number;
  /** *Optional*. Point in time (Unix timestamp) when the poll will be automatically closed */
  close_date?: number;
}

/** This object represents a point on the map. */
export interface Location {
  /** Longitude as defined by sender */
  longitude: number;
  /** Latitude as defined by sender */
  latitude: number;
  /** *Optional*. The radius of uncertainty for the location, measured in meters; 0-1500 */
  horizontal_accuracy?: number;
  /** *Optional*. Time relative to the message sending date, during which the location can be updated, in seconds. For active live locations only. */
  live_period?: number;
  /** *Optional*. The direction in which user is moving, in degrees; 1-360. For active live locations only. */
  heading?: number;
  /** *Optional*. Maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only. */
  proximity_alert_radius?: number;
}

/** This object represents a venue. */
export interface Venue {
  /** This object represents a point on the map. */
  location: Location;
  /** Name of the venue */
  title: string;
  /** Address of the venue */
  address: string;
  /** *Optional*. Foursquare identifier of the venue */
  foursquare_id?: string;
  /** *Optional*. Foursquare type of the venue. (For example, “arts\_entertainment/default”, “arts\_entertainment/aquarium” or “food/icecream”.) */
  foursquare_type?: string;
  /** *Optional*. Google Places identifier of the venue */
  google_place_id?: string;
  /** *Optional*. Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).) */
  google_place_type?: string;
}

/** This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user. */
export interface ProximityAlertTriggered {
  /** This object represents a Telegram user or bot. */
  traveler: User;
  /** This object represents a Telegram user or bot. */
  watcher: User;
  /** The distance between the users */
  distance: number;
}

/** This object represent a user's profile pictures. */
export interface UserProfilePhotos {
  /** Total number of profile pictures the target user has */
  total_count: number;
  /** Requested profile pictures (in up to 4 sizes each) */
  photos: PhotoSize[][];
}

/**
 * This object represents a file ready to be downloaded. The file can be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api/#getfile).
 *
 * Maximum file size to download is 20 MB
 */
export interface File {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** *Optional*. File size, if known */
  file_size?: number;
  /** *Optional*. File path. Use `https://api.telegram.org/file/bot<token>/<file_path>` to get the file. */
  file_path?: string;
}

/** This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples). */
export interface ReplyKeyboardMarkup {
  /** Array of button rows, each represented by an Array of [KeyboardButton](https://core.telegram.org/bots/api/#keyboardbutton) objects */
  keyboard: KeyboardButton[][];
  /**
   * *Optional*. Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to *false*, in which case the custom keyboard is always of the same height as the app's standard keyboard.
   * @default false
   */
  resize_keyboard?: boolean;
  /**
   * *Optional*. Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat – the user can press a special button in the input field to see the custom keyboard again. Defaults to *false*.
   * @default false
   */
  one_time_keyboard?: boolean;
  /**
   * *Optional*. Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the *text* of the [Message](https://core.telegram.org/bots/api/#message) object; 2) if the bot's message is a reply (has *reply\_to\_message\_id*), sender of the original message.
   *
   * *Example:* A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard.
   */
  selective?: boolean;
}

/** This object represents one button of the reply keyboard. For simple text buttons *String* can be used instead of this object to specify text of the button. Optional fields *request\_contact*, *request\_location*, and *request\_poll* are mutually exclusive. */
export interface KeyboardButton {
  /** Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed */
  text: string;
  /** *Optional*. If *True*, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only */
  request_contact?: boolean;
  /** *Optional*. If *True*, the user's current location will be sent when the button is pressed. Available in private chats only */
  request_location?: boolean;
  /** This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed. */
  request_poll?: KeyboardButtonPollType;
}

/** This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed. */
export interface KeyboardButtonPollType {
  /** *Optional*. If *quiz* is passed, the user will be allowed to create only polls in the quiz mode. If *regular* is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type. */
  type?: string;
}

/** Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup)). */
export interface ReplyKeyboardRemove {
  /** Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use *one\_time\_keyboard* in [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup)) */
  remove_keyboard: boolean;
  /**
   * *Optional*. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the *text* of the [Message](https://core.telegram.org/bots/api/#message) object; 2) if the bot's message is a reply (has *reply\_to\_message\_id*), sender of the original message.
   *
   * *Example:* A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet.
   */
  selective?: boolean;
}

/** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
export interface InlineKeyboardMarkup {
  /** Array of button rows, each represented by an Array of [InlineKeyboardButton](https://core.telegram.org/bots/api/#inlinekeyboardbutton) objects */
  inline_keyboard: InlineKeyboardButton[][];
}

/** This object represents one button of an inline keyboard. You **must** use exactly one of the optional fields. */
export interface InlineKeyboardButton {
  /** Label text on the button */
  text: string;
  /** *Optional*. HTTP or tg:// url to be opened when button is pressed */
  url?: string;
  /**
   * This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the [Telegram Login Widget](https://core.telegram.org/widgets/login) when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:
   *
   * Telegram apps support these buttons as of [version 5.7](https://telegram.org/blog/privacy-discussions-web-bots#meet-seamless-web-bots).
   *
   * Sample bot: [@discussbot](https://t.me/discussbot)
   */
  login_url?: LoginUrl;
  /** *Optional*. Data to be sent in a [callback query](https://core.telegram.org/bots/api/#callbackquery) to the bot when button is pressed, 1-64 bytes */
  callback_data?: string;
  /**
   * *Optional*. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. Can be empty, in which case just the bot's username will be inserted.
   *
   * **Note:** This offers an easy way for users to start using your bot in [inline mode](/bots/inline) when they are currently in a private chat with it. Especially useful when combined with [*switch\_pm…*](https://core.telegram.org/bots/api/#answerinlinequery) actions – in this case the user will be automatically returned to the chat they switched from, skipping the chat selection screen.
   */
  switch_inline_query?: string;
  /**
   * *Optional*. If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. Can be empty, in which case only the bot's username will be inserted.
   *
   * This offers a quick way for the user to open your bot in inline mode in the same chat – good for selecting something from multiple options.
   */
  switch_inline_query_current_chat?: string;
  /** A placeholder, currently holds no information. Use [BotFather](https://t.me/botfather) to set up your game. */
  callback_game?: CallbackGame;
  /**
   * *Optional*. Specify True, to send a [Pay button](https://core.telegram.org/bots/api/#payments).
   *
   * **NOTE:** This type of button **must** always be the first button in the first row.
   */
  pay?: boolean;
}

/**
 * This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the [Telegram Login Widget](https://core.telegram.org/widgets/login) when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:
 *
 * Telegram apps support these buttons as of [version 5.7](https://telegram.org/blog/privacy-discussions-web-bots#meet-seamless-web-bots).
 *
 * Sample bot: [@discussbot](https://t.me/discussbot)
 */
export interface LoginUrl {
  /**
   * An HTTP URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in [Receiving authorization data](https://core.telegram.org/widgets/login#receiving-authorization-data).
   *
   * **NOTE:** You **must** always check the hash of the received data to verify the authentication and the integrity of the data as described in [Checking authorization](https://core.telegram.org/widgets/login#checking-authorization).
   */
  url: string;
  /** *Optional*. New text of the button in forwarded messages. */
  forward_text?: string;
  /** *Optional*. Username of a bot, which will be used for user authorization. See [Setting up a bot](https://core.telegram.org/widgets/login#setting-up-a-bot) for more details. If not specified, the current bot's username will be assumed. The *url*'s domain must be the same as the domain linked with the bot. See [Linking your domain to the bot](https://core.telegram.org/widgets/login#linking-your-domain-to-the-bot) for more details. */
  bot_username?: string;
  /** *Optional*. Pass True to request the permission for your bot to send messages to the user. */
  request_write_access?: boolean;
}

/** This object represents an incoming callback query from a callback button in an [inline keyboard](/bots#inline-keyboards-and-on-the-fly-updating). If the button that originated the query was attached to a message sent by the bot, the field *message* will be present. If the button was attached to a message sent via the bot (in [inline mode](https://core.telegram.org/bots/api/#inline-mode)), the field *inline\_message\_id* will be present. Exactly one of the fields *data* or *game\_short\_name* will be present. */
export interface CallbackQuery {
  /** Unique identifier for this query */
  id: string;
  /** This object represents a Telegram user or bot. */
  from: User;
  /** This object represents a message. */
  message?: Message;
  /** *Optional*. Identifier of the message sent via the bot in inline mode, that originated the query. */
  inline_message_id?: string;
  /** Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in [games](https://core.telegram.org/bots/api/#games). */
  chat_instance: string;
  /** *Optional*. Data associated with the callback button. Be aware that a bad client can send arbitrary data in this field. */
  data?: string;
  /** *Optional*. Short name of a [Game](https://core.telegram.org/bots/api/#games) to be returned, serves as the unique identifier for the game */
  game_short_name?: string;
}

/** Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](/bots#privacy-mode). */
export interface ForceReply {
  /** Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply' */
  force_reply: boolean;
  /** *Optional*. Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the *text* of the [Message](https://core.telegram.org/bots/api/#message) object; 2) if the bot's message is a reply (has *reply\_to\_message\_id*), sender of the original message. */
  selective?: boolean;
}

/** This object represents a chat photo. */
export interface ChatPhoto {
  /** File identifier of small (160x160) chat photo. This file\_id can be used only for photo download and only for as long as the photo is not changed. */
  small_file_id: string;
  /** Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  small_file_unique_id: string;
  /** File identifier of big (640x640) chat photo. This file\_id can be used only for photo download and only for as long as the photo is not changed. */
  big_file_id: string;
  /** Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  big_file_unique_id: string;
}

/** This object contains information about one member of a chat. */
export interface ChatMember {
  /** This object represents a Telegram user or bot. */
  user: User;
  /** The member's status in the chat. Can be “creator”, “administrator”, “member”, “restricted”, “left” or “kicked” */
  status:
    | "creator"
    | "administrator"
    | "member"
    | "restricted"
    | "left"
    | "kicked";
  /** *Optional*. Owner and administrators only. Custom title for this user */
  custom_title?: string;
  /** *Optional*. Owner and administrators only. True, if the user's presence in the chat is hidden */
  is_anonymous?: boolean;
  /** *Optional*. Administrators only. True, if the bot is allowed to edit administrator privileges of that user */
  can_be_edited?: boolean;
  /** *Optional*. Administrators only. True, if the administrator can post in the channel; channels only */
  can_post_messages?: boolean;
  /** *Optional*. Administrators only. True, if the administrator can edit messages of other users and can pin messages; channels only */
  can_edit_messages?: boolean;
  /** *Optional*. Administrators only. True, if the administrator can delete messages of other users */
  can_delete_messages?: boolean;
  /** *Optional*. Administrators only. True, if the administrator can restrict, ban or unban chat members */
  can_restrict_members?: boolean;
  /** *Optional*. Administrators only. True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
  can_promote_members?: boolean;
  /** *Optional*. Administrators and restricted only. True, if the user is allowed to change the chat title, photo and other settings */
  can_change_info?: boolean;
  /** *Optional*. Administrators and restricted only. True, if the user is allowed to invite new users to the chat */
  can_invite_users?: boolean;
  /** *Optional*. Administrators and restricted only. True, if the user is allowed to pin messages; groups and supergroups only */
  can_pin_messages?: boolean;
  /** *Optional*. Restricted only. True, if the user is a member of the chat at the moment of the request */
  is_member?: boolean;
  /** *Optional*. Restricted only. True, if the user is allowed to send text messages, contacts, locations and venues */
  can_send_messages?: boolean;
  /** *Optional*. Restricted only. True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes */
  can_send_media_messages?: boolean;
  /** *Optional*. Restricted only. True, if the user is allowed to send polls */
  can_send_polls?: boolean;
  /** *Optional*. Restricted only. True, if the user is allowed to send animations, games, stickers and use inline bots */
  can_send_other_messages?: boolean;
  /** *Optional*. Restricted only. True, if the user is allowed to add web page previews to their messages */
  can_add_web_page_previews?: boolean;
  /** *Optional*. Restricted and kicked only. Date when restrictions will be lifted for this user; unix time */
  until_date?: number;
}

/** Describes actions that a non-administrator user is allowed to take in a chat. */
export interface ChatPermissions {
  /** *Optional*. True, if the user is allowed to send text messages, contacts, locations and venues */
  can_send_messages?: boolean;
  /** *Optional*. True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes, implies can\_send\_messages */
  can_send_media_messages?: boolean;
  /** *Optional*. True, if the user is allowed to send polls, implies can\_send\_messages */
  can_send_polls?: boolean;
  /** *Optional*. True, if the user is allowed to send animations, games, stickers and use inline bots, implies can\_send\_media\_messages */
  can_send_other_messages?: boolean;
  /** *Optional*. True, if the user is allowed to add web page previews to their messages, implies can\_send\_media\_messages */
  can_add_web_page_previews?: boolean;
  /** *Optional*. True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups */
  can_change_info?: boolean;
  /** *Optional*. True, if the user is allowed to invite new users to the chat */
  can_invite_users?: boolean;
  /** *Optional*. True, if the user is allowed to pin messages. Ignored in public supergroups */
  can_pin_messages?: boolean;
}

/** Represents a location to which a chat is connected. */
export interface ChatLocation {
  /** This object represents a point on the map. */
  location: Location;
  /** Location address; 1-64 characters, as defined by the chat owner */
  address: string;
}

/** This object represents a bot command. */
export interface BotCommand {
  /** Text of the command, 1-32 characters. Can contain only lowercase English letters, digits and underscores. */
  command: string;
  /** Description of the command, 3-256 characters. */
  description: string;
}

/** Contains information about why a request was unsuccessful. */
export interface ResponseParameters {
  /** *Optional*. The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. */
  migrate_to_chat_id?: number;
  /** *Optional*. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated */
  retry_after?: number;
}

/** This object represents the content of a media message to be sent. It should be one of */
export type InputMedia =
  | InputMediaAnimation
  | InputMediaDocument
  | InputMediaAudio
  | InputMediaPhoto
  | InputMediaVideo;

/** Represents a photo to be sent. */
export interface InputMediaPhoto {
  /** Type of the result, must be *photo* */
  type: string;
  /** File to send. Pass a file\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file\_attach\_name>” to upload a new one using multipart/form-data under <file\_attach\_name> name. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  media: string;
  /** *Optional*. Caption of the photo to be sent, 0-1024 characters after entities parsing */
  caption?: string;
  /** *Optional*. Mode for parsing entities in the photo caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
}

/** Represents a video to be sent. */
export interface InputMediaVideo {
  /** Type of the result, must be *video* */
  type: string;
  /** File to send. Pass a file\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file\_attach\_name>” to upload a new one using multipart/form-data under <file\_attach\_name> name. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  media: string;
  /** *Optional*. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  thumb?: InputFile | string;
  /** *Optional*. Caption of the video to be sent, 0-1024 characters after entities parsing */
  caption?: string;
  /** *Optional*. Mode for parsing entities in the video caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** *Optional*. Video width */
  width?: number;
  /** *Optional*. Video height */
  height?: number;
  /** *Optional*. Video duration */
  duration?: number;
  /** *Optional*. Pass *True*, if the uploaded video is suitable for streaming */
  supports_streaming?: boolean;
}

/** Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent. */
export interface InputMediaAnimation {
  /** Type of the result, must be *animation* */
  type: string;
  /** File to send. Pass a file\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file\_attach\_name>” to upload a new one using multipart/form-data under <file\_attach\_name> name. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  media: string;
  /** *Optional*. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  thumb?: InputFile | string;
  /** *Optional*. Caption of the animation to be sent, 0-1024 characters after entities parsing */
  caption?: string;
  /** *Optional*. Mode for parsing entities in the animation caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** *Optional*. Animation width */
  width?: number;
  /** *Optional*. Animation height */
  height?: number;
  /** *Optional*. Animation duration */
  duration?: number;
}

/** Represents an audio file to be treated as music to be sent. */
export interface InputMediaAudio {
  /** Type of the result, must be *audio* */
  type: string;
  /** File to send. Pass a file\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file\_attach\_name>” to upload a new one using multipart/form-data under <file\_attach\_name> name. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  media: string;
  /** *Optional*. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  thumb?: InputFile | string;
  /** *Optional*. Caption of the audio to be sent, 0-1024 characters after entities parsing */
  caption?: string;
  /** *Optional*. Mode for parsing entities in the audio caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** *Optional*. Duration of the audio in seconds */
  duration?: number;
  /** *Optional*. Performer of the audio */
  performer?: string;
  /** *Optional*. Title of the audio */
  title?: string;
}

/** Represents a general file to be sent. */
export interface InputMediaDocument {
  /** Type of the result, must be *document* */
  type: string;
  /** File to send. Pass a file\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file\_attach\_name>” to upload a new one using multipart/form-data under <file\_attach\_name> name. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  media: string;
  /** *Optional*. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  thumb?: InputFile | string;
  /** *Optional*. Caption of the document to be sent, 0-1024 characters after entities parsing */
  caption?: string;
  /** *Optional*. Mode for parsing entities in the document caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** *Optional*. Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always true, if the document is sent as part of an album. */
  disable_content_type_detection?: boolean;
}

/** This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser. */
export type InputFile = any;

/** This object represents a sticker. */
export interface Sticker {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** Sticker width */
  width: number;
  /** Sticker height */
  height: number;
  /** *True*, if the sticker is [animated](https://telegram.org/blog/animated-stickers) */
  is_animated: boolean;
  /** This object represents one size of a photo or a [file](https://core.telegram.org/bots/api/#document) / [sticker](https://core.telegram.org/bots/api/#sticker) thumbnail. */
  thumb?: PhotoSize;
  /** *Optional*. Emoji associated with the sticker */
  emoji?: string;
  /** *Optional*. Name of the sticker set to which the sticker belongs */
  set_name?: string;
  /** This object describes the position on faces where a mask should be placed by default. */
  mask_position?: MaskPosition;
  /** *Optional*. File size */
  file_size?: number;
}

/** This object represents a sticker set. */
export interface StickerSet {
  /** Sticker set name */
  name: string;
  /** Sticker set title */
  title: string;
  /** *True*, if the sticker set contains [animated stickers](https://telegram.org/blog/animated-stickers) */
  is_animated: boolean;
  /** *True*, if the sticker set contains masks */
  contains_masks: boolean;
  /** List of all set stickers */
  stickers: Sticker[];
  /** This object represents one size of a photo or a [file](https://core.telegram.org/bots/api/#document) / [sticker](https://core.telegram.org/bots/api/#sticker) thumbnail. */
  thumb?: PhotoSize;
}

/** This object describes the position on faces where a mask should be placed by default. */
export interface MaskPosition {
  /** The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”. */
  point: "forehead" | "eyes" | "mouth" | "chin";
  /** Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position. */
  x_shift: number;
  /** Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position. */
  y_shift: number;
  /** Mask scaling coefficient. For example, 2.0 means double size. */
  scale: number;
}

/** This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results. */
export interface InlineQuery {
  /** Unique identifier for this query */
  id: string;
  /** This object represents a Telegram user or bot. */
  from: User;
  /** This object represents a point on the map. */
  location?: Location;
  /** Text of the query (up to 256 characters) */
  query: string;
  /** Offset of the results to be returned, can be controlled by the bot */
  offset: string;
}

/** This object represents one result of an inline query. Telegram clients currently support results of the following 20 types: */
export type InlineQueryResult =
  | InlineQueryResultCachedAudio
  | InlineQueryResultCachedDocument
  | InlineQueryResultCachedGif
  | InlineQueryResultCachedMpeg4Gif
  | InlineQueryResultCachedPhoto
  | InlineQueryResultCachedSticker
  | InlineQueryResultCachedVideo
  | InlineQueryResultCachedVoice
  | InlineQueryResultArticle
  | InlineQueryResultAudio
  | InlineQueryResultContact
  | InlineQueryResultGame
  | InlineQueryResultDocument
  | InlineQueryResultGif
  | InlineQueryResultLocation
  | InlineQueryResultMpeg4Gif
  | InlineQueryResultPhoto
  | InlineQueryResultVenue
  | InlineQueryResultVideo
  | InlineQueryResultVoice;

/** Represents a link to an article or web page. */
export interface InlineQueryResultArticle {
  /** Type of the result, must be *article* */
  type: string;
  /** Unique identifier for this result, 1-64 Bytes */
  id: string;
  /** Title of the result */
  title: string;
  /** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types: */
  input_message_content: InputMessageContent;
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
  /** *Optional*. URL of the result */
  url?: string;
  /** *Optional*. Pass *True*, if you don't want the URL to be shown in the message */
  hide_url?: boolean;
  /** *Optional*. Short description of the result */
  description?: string;
  /** *Optional*. Url of the thumbnail for the result */
  thumb_url?: string;
  /** *Optional*. Thumbnail width */
  thumb_width?: number;
  /** *Optional*. Thumbnail height */
  thumb_height?: number;
}

/** Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the photo. */
export interface InlineQueryResultPhoto {
  /** Type of the result, must be *photo* */
  type: string;
  /** Unique identifier for this result, 1-64 bytes */
  id: string;
  /** A valid URL of the photo. Photo must be in **jpeg** format. Photo size must not exceed 5MB */
  photo_url: string;
  /** URL of the thumbnail for the photo */
  thumb_url: string;
  /** *Optional*. Width of the photo */
  photo_width?: number;
  /** *Optional*. Height of the photo */
  photo_height?: number;
  /** *Optional*. Title for the result */
  title?: string;
  /** *Optional*. Short description of the result */
  description?: string;
  /** *Optional*. Caption of the photo to be sent, 0-1024 characters after entities parsing */
  caption?: string;
  /** *Optional*. Mode for parsing entities in the photo caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
  /** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types: */
  input_message_content?: InputMessageContent;
}

/** Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the animation. */
export interface InlineQueryResultGif {
  /** Type of the result, must be *gif* */
  type: string;
  /** Unique identifier for this result, 1-64 bytes */
  id: string;
  /** A valid URL for the GIF file. File size must not exceed 1MB */
  gif_url: string;
  /** *Optional*. Width of the GIF */
  gif_width?: number;
  /** *Optional*. Height of the GIF */
  gif_height?: number;
  /** *Optional*. Duration of the GIF */
  gif_duration?: number;
  /** URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result */
  thumb_url: string;
  /**
   * *Optional*. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”
   * @default "image/jpeg"
   */
  thumb_mime_type?: "image/jpeg" | "image/gif" | "video/mp4";
  /** *Optional*. Title for the result */
  title?: string;
  /** *Optional*. Caption of the GIF file to be sent, 0-1024 characters after entities parsing */
  caption?: string;
  /** *Optional*. Mode for parsing entities in the caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
  /** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types: */
  input_message_content?: InputMessageContent;
}

/** Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the animation. */
export interface InlineQueryResultMpeg4Gif {
  /** Type of the result, must be *mpeg4\_gif* */
  type: string;
  /** Unique identifier for this result, 1-64 bytes */
  id: string;
  /** A valid URL for the MP4 file. File size must not exceed 1MB */
  mpeg4_url: string;
  /** *Optional*. Video width */
  mpeg4_width?: number;
  /** *Optional*. Video height */
  mpeg4_height?: number;
  /** *Optional*. Video duration */
  mpeg4_duration?: number;
  /** URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result */
  thumb_url: string;
  /**
   * *Optional*. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”
   * @default "image/jpeg"
   */
  thumb_mime_type?: "image/jpeg" | "image/gif" | "video/mp4";
  /** *Optional*. Title for the result */
  title?: string;
  /** *Optional*. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing */
  caption?: string;
  /** *Optional*. Mode for parsing entities in the caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
  /** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types: */
  input_message_content?: InputMessageContent;
}

/**
 * Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the video.
 *
 * If an InlineQueryResultVideo message contains an embedded video (e.g., YouTube), you **must** replace its content using *input\_message\_content*.
 */
export interface InlineQueryResultVideo {
  /** Type of the result, must be *video* */
  type: string;
  /** Unique identifier for this result, 1-64 bytes */
  id: string;
  /** A valid URL for the embedded video player or video file */
  video_url: string;
  /** Mime type of the content of video url, “text/html” or “video/mp4” */
  mime_type: string;
  /** URL of the thumbnail (jpeg only) for the video */
  thumb_url: string;
  /** Title for the result */
  title: string;
  /** *Optional*. Caption of the video to be sent, 0-1024 characters after entities parsing */
  caption?: string;
  /** *Optional*. Mode for parsing entities in the video caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** *Optional*. Video width */
  video_width?: number;
  /** *Optional*. Video height */
  video_height?: number;
  /** *Optional*. Video duration in seconds */
  video_duration?: number;
  /** *Optional*. Short description of the result */
  description?: string;
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
  /** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types: */
  input_message_content?: InputMessageContent;
}

/** Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the audio. */
export interface InlineQueryResultAudio {
  /** Type of the result, must be *audio* */
  type: string;
  /** Unique identifier for this result, 1-64 bytes */
  id: string;
  /** A valid URL for the audio file */
  audio_url: string;
  /** Title */
  title: string;
  /** *Optional*. Caption, 0-1024 characters after entities parsing */
  caption?: string;
  /** *Optional*. Mode for parsing entities in the audio caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** *Optional*. Performer */
  performer?: string;
  /** *Optional*. Audio duration in seconds */
  audio_duration?: number;
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
  /** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types: */
  input_message_content?: InputMessageContent;
}

/** Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the the voice message. */
export interface InlineQueryResultVoice {
  /** Type of the result, must be *voice* */
  type: string;
  /** Unique identifier for this result, 1-64 bytes */
  id: string;
  /** A valid URL for the voice recording */
  voice_url: string;
  /** Recording title */
  title: string;
  /** *Optional*. Caption, 0-1024 characters after entities parsing */
  caption?: string;
  /** *Optional*. Mode for parsing entities in the voice message caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** *Optional*. Recording duration in seconds */
  voice_duration?: number;
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
  /** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types: */
  input_message_content?: InputMessageContent;
}

/** Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the file. Currently, only **.PDF** and **.ZIP** files can be sent using this method. */
export interface InlineQueryResultDocument {
  /** Type of the result, must be *document* */
  type: string;
  /** Unique identifier for this result, 1-64 bytes */
  id: string;
  /** Title for the result */
  title: string;
  /** *Optional*. Caption of the document to be sent, 0-1024 characters after entities parsing */
  caption?: string;
  /** *Optional*. Mode for parsing entities in the document caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** A valid URL for the file */
  document_url: string;
  /** Mime type of the content of the file, either “application/pdf” or “application/zip” */
  mime_type: "application/pdf" | "application/zip";
  /** *Optional*. Short description of the result */
  description?: string;
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
  /** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types: */
  input_message_content?: InputMessageContent;
  /** *Optional*. URL of the thumbnail (jpeg only) for the file */
  thumb_url?: string;
  /** *Optional*. Thumbnail width */
  thumb_width?: number;
  /** *Optional*. Thumbnail height */
  thumb_height?: number;
}

/** Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the location. */
export interface InlineQueryResultLocation {
  /** Type of the result, must be *location* */
  type: string;
  /** Unique identifier for this result, 1-64 Bytes */
  id: string;
  /** Location latitude in degrees */
  latitude: number;
  /** Location longitude in degrees */
  longitude: number;
  /** Location title */
  title: string;
  /** *Optional*. The radius of uncertainty for the location, measured in meters; 0-1500 */
  horizontal_accuracy?: number;
  /** *Optional*. Period in seconds for which the location can be updated, should be between 60 and 86400. */
  live_period?: number;
  /** *Optional*. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
  heading?: number;
  /** *Optional*. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
  proximity_alert_radius?: number;
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
  /** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types: */
  input_message_content?: InputMessageContent;
  /** *Optional*. Url of the thumbnail for the result */
  thumb_url?: string;
  /** *Optional*. Thumbnail width */
  thumb_width?: number;
  /** *Optional*. Thumbnail height */
  thumb_height?: number;
}

/** Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the venue. */
export interface InlineQueryResultVenue {
  /** Type of the result, must be *venue* */
  type: string;
  /** Unique identifier for this result, 1-64 Bytes */
  id: string;
  /** Latitude of the venue location in degrees */
  latitude: number;
  /** Longitude of the venue location in degrees */
  longitude: number;
  /** Title of the venue */
  title: string;
  /** Address of the venue */
  address: string;
  /** *Optional*. Foursquare identifier of the venue if known */
  foursquare_id?: string;
  /** *Optional*. Foursquare type of the venue, if known. (For example, “arts\_entertainment/default”, “arts\_entertainment/aquarium” or “food/icecream”.) */
  foursquare_type?: string;
  /** *Optional*. Google Places identifier of the venue */
  google_place_id?: string;
  /** *Optional*. Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).) */
  google_place_type?: string;
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
  /** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types: */
  input_message_content?: InputMessageContent;
  /** *Optional*. Url of the thumbnail for the result */
  thumb_url?: string;
  /** *Optional*. Thumbnail width */
  thumb_width?: number;
  /** *Optional*. Thumbnail height */
  thumb_height?: number;
}

/** Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the contact. */
export interface InlineQueryResultContact {
  /** Type of the result, must be *contact* */
  type: string;
  /** Unique identifier for this result, 1-64 Bytes */
  id: string;
  /** Contact's phone number */
  phone_number: string;
  /** Contact's first name */
  first_name: string;
  /** *Optional*. Contact's last name */
  last_name?: string;
  /** *Optional*. Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes */
  vcard?: string;
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
  /** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types: */
  input_message_content?: InputMessageContent;
  /** *Optional*. Url of the thumbnail for the result */
  thumb_url?: string;
  /** *Optional*. Thumbnail width */
  thumb_width?: number;
  /** *Optional*. Thumbnail height */
  thumb_height?: number;
}

/** Represents a [Game](https://core.telegram.org/bots/api/#games). */
export interface InlineQueryResultGame {
  /** Type of the result, must be *game* */
  type: string;
  /** Unique identifier for this result, 1-64 bytes */
  id: string;
  /** Short name of the game */
  game_short_name: string;
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
}

/** Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the photo. */
export interface InlineQueryResultCachedPhoto {
  /** Type of the result, must be *photo* */
  type: string;
  /** Unique identifier for this result, 1-64 bytes */
  id: string;
  /** A valid file identifier of the photo */
  photo_file_id: string;
  /** *Optional*. Title for the result */
  title?: string;
  /** *Optional*. Short description of the result */
  description?: string;
  /** *Optional*. Caption of the photo to be sent, 0-1024 characters after entities parsing */
  caption?: string;
  /** *Optional*. Mode for parsing entities in the photo caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
  /** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types: */
  input_message_content?: InputMessageContent;
}

/** Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with specified content instead of the animation. */
export interface InlineQueryResultCachedGif {
  /** Type of the result, must be *gif* */
  type: string;
  /** Unique identifier for this result, 1-64 bytes */
  id: string;
  /** A valid file identifier for the GIF file */
  gif_file_id: string;
  /** *Optional*. Title for the result */
  title?: string;
  /** *Optional*. Caption of the GIF file to be sent, 0-1024 characters after entities parsing */
  caption?: string;
  /** *Optional*. Mode for parsing entities in the caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
  /** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types: */
  input_message_content?: InputMessageContent;
}

/** Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the animation. */
export interface InlineQueryResultCachedMpeg4Gif {
  /** Type of the result, must be *mpeg4\_gif* */
  type: string;
  /** Unique identifier for this result, 1-64 bytes */
  id: string;
  /** A valid file identifier for the MP4 file */
  mpeg4_file_id: string;
  /** *Optional*. Title for the result */
  title?: string;
  /** *Optional*. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing */
  caption?: string;
  /** *Optional*. Mode for parsing entities in the caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
  /** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types: */
  input_message_content?: InputMessageContent;
}

/** Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the sticker. */
export interface InlineQueryResultCachedSticker {
  /** Type of the result, must be *sticker* */
  type: string;
  /** Unique identifier for this result, 1-64 bytes */
  id: string;
  /** A valid file identifier of the sticker */
  sticker_file_id: string;
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
  /** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types: */
  input_message_content?: InputMessageContent;
}

/** Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the file. */
export interface InlineQueryResultCachedDocument {
  /** Type of the result, must be *document* */
  type: string;
  /** Unique identifier for this result, 1-64 bytes */
  id: string;
  /** Title for the result */
  title: string;
  /** A valid file identifier for the file */
  document_file_id: string;
  /** *Optional*. Short description of the result */
  description?: string;
  /** *Optional*. Caption of the document to be sent, 0-1024 characters after entities parsing */
  caption?: string;
  /** *Optional*. Mode for parsing entities in the document caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
  /** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types: */
  input_message_content?: InputMessageContent;
}

/** Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the video. */
export interface InlineQueryResultCachedVideo {
  /** Type of the result, must be *video* */
  type: string;
  /** Unique identifier for this result, 1-64 bytes */
  id: string;
  /** A valid file identifier for the video file */
  video_file_id: string;
  /** Title for the result */
  title: string;
  /** *Optional*. Short description of the result */
  description?: string;
  /** *Optional*. Caption of the video to be sent, 0-1024 characters after entities parsing */
  caption?: string;
  /** *Optional*. Mode for parsing entities in the video caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
  /** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types: */
  input_message_content?: InputMessageContent;
}

/** Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the voice message. */
export interface InlineQueryResultCachedVoice {
  /** Type of the result, must be *voice* */
  type: string;
  /** Unique identifier for this result, 1-64 bytes */
  id: string;
  /** A valid file identifier for the voice message */
  voice_file_id: string;
  /** Voice message title */
  title: string;
  /** *Optional*. Caption, 0-1024 characters after entities parsing */
  caption?: string;
  /** *Optional*. Mode for parsing entities in the voice message caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
  /** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types: */
  input_message_content?: InputMessageContent;
}

/** Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the audio. */
export interface InlineQueryResultCachedAudio {
  /** Type of the result, must be *audio* */
  type: string;
  /** Unique identifier for this result, 1-64 bytes */
  id: string;
  /** A valid file identifier for the audio file */
  audio_file_id: string;
  /** *Optional*. Caption, 0-1024 characters after entities parsing */
  caption?: string;
  /** *Optional*. Mode for parsing entities in the audio caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
  /** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types: */
  input_message_content?: InputMessageContent;
}

/** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types: */
export type InputMessageContent =
  | InputTextMessageContent
  | InputLocationMessageContent
  | InputVenueMessageContent
  | InputContactMessageContent;

/** Represents the [content](https://core.telegram.org/bots/api/#inputmessagecontent) of a text message to be sent as the result of an inline query. */
export interface InputTextMessageContent {
  /** Text of the message to be sent, 1-4096 characters */
  message_text: string;
  /** *Optional*. Mode for parsing entities in the message text. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** *Optional*. List of special entities that appear in message text, which can be specified instead of *parse\_mode* */
  entities?: MessageEntity[];
  /** *Optional*. Disables link previews for links in the sent message */
  disable_web_page_preview?: boolean;
}

/** Represents the [content](https://core.telegram.org/bots/api/#inputmessagecontent) of a location message to be sent as the result of an inline query. */
export interface InputLocationMessageContent {
  /** Latitude of the location in degrees */
  latitude: number;
  /** Longitude of the location in degrees */
  longitude: number;
  /** *Optional*. The radius of uncertainty for the location, measured in meters; 0-1500 */
  horizontal_accuracy?: number;
  /** *Optional*. Period in seconds for which the location can be updated, should be between 60 and 86400. */
  live_period?: number;
  /** *Optional*. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
  heading?: number;
  /** *Optional*. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
  proximity_alert_radius?: number;
}

/** Represents the [content](https://core.telegram.org/bots/api/#inputmessagecontent) of a venue message to be sent as the result of an inline query. */
export interface InputVenueMessageContent {
  /** Latitude of the venue in degrees */
  latitude: number;
  /** Longitude of the venue in degrees */
  longitude: number;
  /** Name of the venue */
  title: string;
  /** Address of the venue */
  address: string;
  /** *Optional*. Foursquare identifier of the venue, if known */
  foursquare_id?: string;
  /** *Optional*. Foursquare type of the venue, if known. (For example, “arts\_entertainment/default”, “arts\_entertainment/aquarium” or “food/icecream”.) */
  foursquare_type?: string;
  /** *Optional*. Google Places identifier of the venue */
  google_place_id?: string;
  /** *Optional*. Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).) */
  google_place_type?: string;
}

/** Represents the [content](https://core.telegram.org/bots/api/#inputmessagecontent) of a contact message to be sent as the result of an inline query. */
export interface InputContactMessageContent {
  /** Contact's phone number */
  phone_number: string;
  /** Contact's first name */
  first_name: string;
  /** *Optional*. Contact's last name */
  last_name?: string;
  /** *Optional*. Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes */
  vcard?: string;
}

/** Represents a [result](https://core.telegram.org/bots/api/#inlinequeryresult) of an inline query that was chosen by the user and sent to their chat partner. */
export interface ChosenInlineResult {
  /** The unique identifier for the result that was chosen */
  result_id: string;
  /** This object represents a Telegram user or bot. */
  from: User;
  /** This object represents a point on the map. */
  location?: Location;
  /** *Optional*. Identifier of the sent inline message. Available only if there is an [inline keyboard](https://core.telegram.org/bots/api/#inlinekeyboardmarkup) attached to the message. Will be also received in [callback queries](https://core.telegram.org/bots/api/#callbackquery) and can be used to [edit](https://core.telegram.org/bots/api/#updating-messages) the message. */
  inline_message_id?: string;
  /** The query that was used to obtain the result */
  query: string;
}

/** This object represents a portion of the price for goods or services. */
export interface LabeledPrice {
  /** Portion label */
  label: string;
  /** Price of the product in the *smallest units* of the [currency](/bots/payments#supported-currencies) (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the *exp* parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
  amount: number;
}

/** This object contains basic information about an invoice. */
export interface Invoice {
  /** Product name */
  title: string;
  /** Product description */
  description: string;
  /** Unique bot deep-linking parameter that can be used to generate this invoice */
  start_parameter: string;
  /** Three-letter ISO 4217 [currency](/bots/payments#supported-currencies) code */
  currency: string;
  /** Total price in the *smallest units* of the currency (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the *exp* parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
  total_amount: number;
}

/** This object represents a shipping address. */
export interface ShippingAddress {
  /** ISO 3166-1 alpha-2 country code */
  country_code: string;
  /** State, if applicable */
  state: string;
  /** City */
  city: string;
  /** First line for the address */
  street_line1: string;
  /** Second line for the address */
  street_line2: string;
  /** Address post code */
  post_code: string;
}

/** This object represents information about an order. */
export interface OrderInfo {
  /** *Optional*. User name */
  name?: string;
  /** *Optional*. User's phone number */
  phone_number?: string;
  /** *Optional*. User email */
  email?: string;
  /** This object represents a shipping address. */
  shipping_address?: ShippingAddress;
}

/** This object represents one shipping option. */
export interface ShippingOption {
  /** Shipping option identifier */
  id: string;
  /** Option title */
  title: string;
  /** List of price portions */
  prices: LabeledPrice[];
}

/** This object contains basic information about a successful payment. */
export interface SuccessfulPayment {
  /** Three-letter ISO 4217 [currency](/bots/payments#supported-currencies) code */
  currency: string;
  /** Total price in the *smallest units* of the currency (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the *exp* parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
  total_amount: number;
  /** Bot specified invoice payload */
  invoice_payload: string;
  /** *Optional*. Identifier of the shipping option chosen by the user */
  shipping_option_id?: string;
  /** This object represents information about an order. */
  order_info?: OrderInfo;
  /** Telegram payment identifier */
  telegram_payment_charge_id: string;
  /** Provider payment identifier */
  provider_payment_charge_id: string;
}

/** This object contains information about an incoming shipping query. */
export interface ShippingQuery {
  /** Unique query identifier */
  id: string;
  /** This object represents a Telegram user or bot. */
  from: User;
  /** Bot specified invoice payload */
  invoice_payload: string;
  /** This object represents a shipping address. */
  shipping_address: ShippingAddress;
}

/** This object contains information about an incoming pre-checkout query. */
export interface PreCheckoutQuery {
  /** Unique query identifier */
  id: string;
  /** This object represents a Telegram user or bot. */
  from: User;
  /** Three-letter ISO 4217 [currency](/bots/payments#supported-currencies) code */
  currency: string;
  /** Total price in the *smallest units* of the currency (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the *exp* parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
  total_amount: number;
  /** Bot specified invoice payload */
  invoice_payload: string;
  /** *Optional*. Identifier of the shipping option chosen by the user */
  shipping_option_id?: string;
  /** This object represents information about an order. */
  order_info?: OrderInfo;
}

/** Contains information about Telegram Passport data shared with the bot by the user. */
export interface PassportData {
  /** Array with information about documents and other Telegram Passport elements that was shared with the bot */
  data: EncryptedPassportElement[];
  /** Contains data required for decrypting and authenticating [EncryptedPassportElement](https://core.telegram.org/bots/api/#encryptedpassportelement). See the [Telegram Passport Documentation](https://core.telegram.org/passport#receiving-information) for a complete description of the data decryption and authentication processes. */
  credentials: EncryptedCredentials;
}

/** This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB. */
export interface PassportFile {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** File size */
  file_size: number;
  /** Unix time when the file was uploaded */
  file_date: number;
}

/** Contains information about documents or other Telegram Passport elements shared with the bot by the user. */
export interface EncryptedPassportElement {
  /** Element type. One of “personal\_details”, “passport”, “driver\_license”, “identity\_card”, “internal\_passport”, “address”, “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration”, “temporary\_registration”, “phone\_number”, “email”. */
  type:
    | "personal_details"
    | "passport"
    | "driver_license"
    | "identity_card"
    | "internal_passport"
    | "address"
    | "utility_bill"
    | "bank_statement"
    | "rental_agreement"
    | "passport_registration"
    | "temporary_registration"
    | "phone_number"
    | "email";
  /** *Optional*. Base64-encoded encrypted Telegram Passport element data provided by the user, available for “personal\_details”, “passport”, “driver\_license”, “identity\_card”, “internal\_passport” and “address” types. Can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api/#encryptedcredentials). */
  data?: string;
  /** *Optional*. User's verified phone number, available only for “phone\_number” type */
  phone_number?: string;
  /** *Optional*. User's verified email address, available only for “email” type */
  email?: string;
  /** *Optional*. Array of encrypted files with documents provided by the user, available for “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration” and “temporary\_registration” types. Files can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api/#encryptedcredentials). */
  files?: PassportFile[];
  /** This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB. */
  front_side?: PassportFile;
  /** This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB. */
  reverse_side?: PassportFile;
  /** This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB. */
  selfie?: PassportFile;
  /** *Optional*. Array of encrypted files with translated versions of documents provided by the user. Available if requested for “passport”, “driver\_license”, “identity\_card”, “internal\_passport”, “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration” and “temporary\_registration” types. Files can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api/#encryptedcredentials). */
  translation?: PassportFile[];
  /** Base64-encoded element hash for using in [PassportElementErrorUnspecified](https://core.telegram.org/bots/api/#passportelementerrorunspecified) */
  hash: string;
}

/** Contains data required for decrypting and authenticating [EncryptedPassportElement](https://core.telegram.org/bots/api/#encryptedpassportelement). See the [Telegram Passport Documentation](https://core.telegram.org/passport#receiving-information) for a complete description of the data decryption and authentication processes. */
export interface EncryptedCredentials {
  /** Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for [EncryptedPassportElement](https://core.telegram.org/bots/api/#encryptedpassportelement) decryption and authentication */
  data: string;
  /** Base64-encoded data hash for data authentication */
  hash: string;
  /** Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption */
  secret: string;
}

/** This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of: */
export type PassportElementError =
  | PassportElementErrorDataField
  | PassportElementErrorFrontSide
  | PassportElementErrorReverseSide
  | PassportElementErrorSelfie
  | PassportElementErrorFile
  | PassportElementErrorFiles
  | PassportElementErrorTranslationFile
  | PassportElementErrorTranslationFiles
  | PassportElementErrorUnspecified;

/** Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes. */
export interface PassportElementErrorDataField {
  /** Error source, must be *data* */
  source: string;
  /** The section of the user's Telegram Passport which has the error, one of “personal\_details”, “passport”, “driver\_license”, “identity\_card”, “internal\_passport”, “address” */
  type:
    | "personal_details"
    | "passport"
    | "driver_license"
    | "identity_card"
    | "internal_passport"
    | "address";
  /** Name of the data field which has the error */
  field_name: string;
  /** Base64-encoded data hash */
  data_hash: string;
  /** Error message */
  message: string;
}

/** Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes. */
export interface PassportElementErrorFrontSide {
  /** Error source, must be *front\_side* */
  source: string;
  /** The section of the user's Telegram Passport which has the issue, one of “passport”, “driver\_license”, “identity\_card”, “internal\_passport” */
  type: "passport" | "driver_license" | "identity_card" | "internal_passport";
  /** Base64-encoded hash of the file with the front side of the document */
  file_hash: string;
  /** Error message */
  message: string;
}

/** Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes. */
export interface PassportElementErrorReverseSide {
  /** Error source, must be *reverse\_side* */
  source: string;
  /** The section of the user's Telegram Passport which has the issue, one of “driver\_license”, “identity\_card” */
  type: "driver_license" | "identity_card";
  /** Base64-encoded hash of the file with the reverse side of the document */
  file_hash: string;
  /** Error message */
  message: string;
}

/** Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes. */
export interface PassportElementErrorSelfie {
  /** Error source, must be *selfie* */
  source: string;
  /** The section of the user's Telegram Passport which has the issue, one of “passport”, “driver\_license”, “identity\_card”, “internal\_passport” */
  type: "passport" | "driver_license" | "identity_card" | "internal_passport";
  /** Base64-encoded hash of the file with the selfie */
  file_hash: string;
  /** Error message */
  message: string;
}

/** Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes. */
export interface PassportElementErrorFile {
  /** Error source, must be *file* */
  source: string;
  /** The section of the user's Telegram Passport which has the issue, one of “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration”, “temporary\_registration” */
  type:
    | "utility_bill"
    | "bank_statement"
    | "rental_agreement"
    | "passport_registration"
    | "temporary_registration";
  /** Base64-encoded file hash */
  file_hash: string;
  /** Error message */
  message: string;
}

/** Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes. */
export interface PassportElementErrorFiles {
  /** Error source, must be *files* */
  source: string;
  /** The section of the user's Telegram Passport which has the issue, one of “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration”, “temporary\_registration” */
  type:
    | "utility_bill"
    | "bank_statement"
    | "rental_agreement"
    | "passport_registration"
    | "temporary_registration";
  /** List of base64-encoded file hashes */
  file_hashes: string[];
  /** Error message */
  message: string;
}

/** Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes. */
export interface PassportElementErrorTranslationFile {
  /** Error source, must be *translation\_file* */
  source: string;
  /** Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver\_license”, “identity\_card”, “internal\_passport”, “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration”, “temporary\_registration” */
  type:
    | "passport"
    | "driver_license"
    | "identity_card"
    | "internal_passport"
    | "utility_bill"
    | "bank_statement"
    | "rental_agreement"
    | "passport_registration"
    | "temporary_registration";
  /** Base64-encoded file hash */
  file_hash: string;
  /** Error message */
  message: string;
}

/** Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change. */
export interface PassportElementErrorTranslationFiles {
  /** Error source, must be *translation\_files* */
  source: string;
  /** Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver\_license”, “identity\_card”, “internal\_passport”, “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration”, “temporary\_registration” */
  type:
    | "passport"
    | "driver_license"
    | "identity_card"
    | "internal_passport"
    | "utility_bill"
    | "bank_statement"
    | "rental_agreement"
    | "passport_registration"
    | "temporary_registration";
  /** List of base64-encoded file hashes */
  file_hashes: string[];
  /** Error message */
  message: string;
}

/** Represents an issue in an unspecified place. The error is considered resolved when new data is added. */
export interface PassportElementErrorUnspecified {
  /** Error source, must be *unspecified* */
  source: string;
  /** Type of element of the user's Telegram Passport which has the issue */
  type: string;
  /** Base64-encoded element hash */
  element_hash: string;
  /** Error message */
  message: string;
}

/** This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers. */
export interface Game {
  /** Title of the game */
  title: string;
  /** Description of the game */
  description: string;
  /** Photo that will be displayed in the game message in chats. */
  photo: PhotoSize[];
  /** *Optional*. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls [setGameScore](https://core.telegram.org/bots/api/#setgamescore), or manually edited using [editMessageText](https://core.telegram.org/bots/api/#editmessagetext). 0-4096 characters. */
  text?: string;
  /** *Optional*. Special entities that appear in *text*, such as usernames, URLs, bot commands, etc. */
  text_entities?: MessageEntity[];
  /** This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound). */
  animation?: Animation;
}

/** A placeholder, currently holds no information. Use [BotFather](https://t.me/botfather) to set up your game. */
export type CallbackGame = any;

/** This object represents one row of the high scores table for a game. */
export interface GameHighScore {
  /** Position in high score table for the game */
  position: number;
  /** This object represents a Telegram user or bot. */
  user: User;
  /** Score */
  score: number;
}

export interface GetUpdatesCreatePayload {
  /** Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as [getUpdates](https://core.telegram.org/bots/api/#getupdates) is called with an *offset* higher than its *update\_id*. The negative offset can be specified to retrieve updates starting from *-offset* update from the end of the updates queue. All previous updates will forgotten. */
  offset?: number;
  /**
   * Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.
   * @min 1
   * @max 100
   * @default 100
   */
  limit?: number;
  /**
   * Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.
   * @default 0
   */
  timeout?: number;
  /**
   * A JSON-serialized list of the update types you want your bot to receive. For example, specify [“message”, “edited\_channel\_post”, “callback\_query”] to only receive updates of these types. See [Update](https://core.telegram.org/bots/api/#update) for a complete list of available update types. Specify an empty list to receive all updates regardless of type (default). If not specified, the previous setting will be used.
   *
   * Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time.
   */
  allowed_updates?: string[];
}

export interface GetUpdatesCreateData {
  /** @default true */
  ok: boolean;
  result: Update[];
}

export type GetUpdatesCreateError = Error;

export interface SetWebhookCreatePayload {
  /** HTTPS url to send updates to. Use an empty string to remove webhook integration */
  url: string;
  /** This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser. */
  certificate?: InputFile;
  /** The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS */
  ip_address?: string;
  /**
   * Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to *40*. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput.
   * @default 40
   */
  max_connections?: number;
  /**
   * A JSON-serialized list of the update types you want your bot to receive. For example, specify [“message”, “edited\_channel\_post”, “callback\_query”] to only receive updates of these types. See [Update](https://core.telegram.org/bots/api/#update) for a complete list of available update types. Specify an empty list to receive all updates regardless of type (default). If not specified, the previous setting will be used.
   * Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time.
   */
  allowed_updates?: string[];
  /** Pass *True* to drop all pending updates */
  drop_pending_updates?: boolean;
}

export interface SetWebhookCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type SetWebhookCreateError = Error;

export interface DeleteWebhookCreatePayload {
  /** Pass *True* to drop all pending updates */
  drop_pending_updates?: boolean;
}

export interface DeleteWebhookCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type DeleteWebhookCreateError = Error;

export interface GetWebhookInfoCreateData {
  /** @default true */
  ok: boolean;
  /** Contains information about the current status of a webhook. */
  result: WebhookInfo;
}

export type GetWebhookInfoCreateError = Error;

export interface GetMeCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a Telegram user or bot. */
  result: User;
}

export type GetMeCreateError = Error;

export interface LogOutCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type LogOutCreateError = Error;

export interface CloseCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type CloseCreateError = Error;

export interface SendMessageCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Text of the message to be sent, 1-4096 characters after entities parsing */
  text: string;
  /** Mode for parsing entities in the message text. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** List of special entities that appear in message text, which can be specified instead of *parse\_mode* */
  entities?: MessageEntity[];
  /** Disables link previews for links in this message */
  disable_web_page_preview?: boolean;
  /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** If the message is a reply, ID of the original message */
  reply_to_message_id?: number;
  /** Pass *True*, if the message should be sent even if the specified replied-to message is not found */
  allow_sending_without_reply?: boolean;
  /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}

export interface SendMessageCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a message. */
  result: Message;
}

export type SendMessageCreateError = Error;

export interface ForwardMessageCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`) */
  from_chat_id: number | string;
  /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** Message identifier in the chat specified in *from\_chat\_id* */
  message_id: number;
}

export interface ForwardMessageCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a message. */
  result: Message;
}

export type ForwardMessageCreateError = Error;

export interface CopyMessageCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`) */
  from_chat_id: number | string;
  /** Message identifier in the chat specified in *from\_chat\_id* */
  message_id: number;
  /** New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept */
  caption?: string;
  /** Mode for parsing entities in the new caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** List of special entities that appear in the new caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** If the message is a reply, ID of the original message */
  reply_to_message_id?: number;
  /** Pass *True*, if the message should be sent even if the specified replied-to message is not found */
  allow_sending_without_reply?: boolean;
  /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}

export interface CopyMessageCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a unique message identifier. */
  result: MessageId;
}

export type CopyMessageCreateError = Error;

export interface SendPhotoCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Photo to send. Pass a file\_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  photo: InputFile | string;
  /** Photo caption (may also be used when resending photos by *file\_id*), 0-1024 characters after entities parsing */
  caption?: string;
  /** Mode for parsing entities in the photo caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** If the message is a reply, ID of the original message */
  reply_to_message_id?: number;
  /** Pass *True*, if the message should be sent even if the specified replied-to message is not found */
  allow_sending_without_reply?: boolean;
  /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}

export interface SendPhotoCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a message. */
  result: Message;
}

export type SendPhotoCreateError = Error;

export interface SendAudioCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Audio file to send. Pass a file\_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  audio: InputFile | string;
  /** Audio caption, 0-1024 characters after entities parsing */
  caption?: string;
  /** Mode for parsing entities in the audio caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** Duration of the audio in seconds */
  duration?: number;
  /** Performer */
  performer?: string;
  /** Track name */
  title?: string;
  /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  thumb?: InputFile | string;
  /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** If the message is a reply, ID of the original message */
  reply_to_message_id?: number;
  /** Pass *True*, if the message should be sent even if the specified replied-to message is not found */
  allow_sending_without_reply?: boolean;
  /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}

export interface SendAudioCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a message. */
  result: Message;
}

export type SendAudioCreateError = Error;

export interface SendDocumentCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** File to send. Pass a file\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  document: InputFile | string;
  /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  thumb?: InputFile | string;
  /** Document caption (may also be used when resending documents by *file\_id*), 0-1024 characters after entities parsing */
  caption?: string;
  /** Mode for parsing entities in the document caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** Disables automatic server-side content type detection for files uploaded using multipart/form-data */
  disable_content_type_detection?: boolean;
  /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** If the message is a reply, ID of the original message */
  reply_to_message_id?: number;
  /** Pass *True*, if the message should be sent even if the specified replied-to message is not found */
  allow_sending_without_reply?: boolean;
  /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}

export interface SendDocumentCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a message. */
  result: Message;
}

export type SendDocumentCreateError = Error;

export interface SendVideoCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Video to send. Pass a file\_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  video: InputFile | string;
  /** Duration of sent video in seconds */
  duration?: number;
  /** Video width */
  width?: number;
  /** Video height */
  height?: number;
  /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  thumb?: InputFile | string;
  /** Video caption (may also be used when resending videos by *file\_id*), 0-1024 characters after entities parsing */
  caption?: string;
  /** Mode for parsing entities in the video caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** Pass *True*, if the uploaded video is suitable for streaming */
  supports_streaming?: boolean;
  /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** If the message is a reply, ID of the original message */
  reply_to_message_id?: number;
  /** Pass *True*, if the message should be sent even if the specified replied-to message is not found */
  allow_sending_without_reply?: boolean;
  /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}

export interface SendVideoCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a message. */
  result: Message;
}

export type SendVideoCreateError = Error;

export interface SendAnimationCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Animation to send. Pass a file\_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  animation: InputFile | string;
  /** Duration of sent animation in seconds */
  duration?: number;
  /** Animation width */
  width?: number;
  /** Animation height */
  height?: number;
  /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  thumb?: InputFile | string;
  /** Animation caption (may also be used when resending animation by *file\_id*), 0-1024 characters after entities parsing */
  caption?: string;
  /** Mode for parsing entities in the animation caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** If the message is a reply, ID of the original message */
  reply_to_message_id?: number;
  /** Pass *True*, if the message should be sent even if the specified replied-to message is not found */
  allow_sending_without_reply?: boolean;
  /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}

export interface SendAnimationCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a message. */
  result: Message;
}

export type SendAnimationCreateError = Error;

export interface SendVoiceCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Audio file to send. Pass a file\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  voice: InputFile | string;
  /** Voice message caption, 0-1024 characters after entities parsing */
  caption?: string;
  /** Mode for parsing entities in the voice message caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** Duration of the voice message in seconds */
  duration?: number;
  /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** If the message is a reply, ID of the original message */
  reply_to_message_id?: number;
  /** Pass *True*, if the message should be sent even if the specified replied-to message is not found */
  allow_sending_without_reply?: boolean;
  /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}

export interface SendVoiceCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a message. */
  result: Message;
}

export type SendVoiceCreateError = Error;

export interface SendVideoNoteCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Video note to send. Pass a file\_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files). Sending video notes by a URL is currently unsupported */
  video_note: InputFile | string;
  /** Duration of sent video in seconds */
  duration?: number;
  /** Video width and height, i.e. diameter of the video message */
  length?: number;
  /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  thumb?: InputFile | string;
  /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** If the message is a reply, ID of the original message */
  reply_to_message_id?: number;
  /** Pass *True*, if the message should be sent even if the specified replied-to message is not found */
  allow_sending_without_reply?: boolean;
  /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}

export interface SendVideoNoteCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a message. */
  result: Message;
}

export type SendVideoNoteCreateError = Error;

export interface SendMediaGroupCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** A JSON-serialized array describing messages to be sent, must include 2-10 items */
  media: (
    | InputMediaAudio
    | InputMediaDocument
    | InputMediaPhoto
    | InputMediaVideo
  )[];
  /** Sends messages [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** If the messages are a reply, ID of the original message */
  reply_to_message_id?: number;
  /** Pass *True*, if the message should be sent even if the specified replied-to message is not found */
  allow_sending_without_reply?: boolean;
}

export interface SendMediaGroupCreateData {
  /** @default true */
  ok: boolean;
  result: Message[];
}

export type SendMediaGroupCreateError = Error;

export interface SendLocationCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Latitude of the location */
  latitude: number;
  /** Longitude of the location */
  longitude: number;
  /** The radius of uncertainty for the location, measured in meters; 0-1500 */
  horizontal_accuracy?: number;
  /** Period in seconds for which the location will be updated (see [Live Locations](https://telegram.org/blog/live-locations), should be between 60 and 86400. */
  live_period?: number;
  /** For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
  heading?: number;
  /** For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
  proximity_alert_radius?: number;
  /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** If the message is a reply, ID of the original message */
  reply_to_message_id?: number;
  /** Pass *True*, if the message should be sent even if the specified replied-to message is not found */
  allow_sending_without_reply?: boolean;
  /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}

export interface SendLocationCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a message. */
  result: Message;
}

export type SendLocationCreateError = Error;

export interface EditMessageLiveLocationCreatePayload {
  /** Required if *inline\_message\_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id?: number | string;
  /** Required if *inline\_message\_id* is not specified. Identifier of the message to edit */
  message_id?: number;
  /** Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message */
  inline_message_id?: string;
  /** Latitude of new location */
  latitude: number;
  /** Longitude of new location */
  longitude: number;
  /** The radius of uncertainty for the location, measured in meters; 0-1500 */
  horizontal_accuracy?: number;
  /** Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
  heading?: number;
  /** Maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
  proximity_alert_radius?: number;
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
}

export interface EditMessageLiveLocationCreateData {
  /** @default true */
  ok: boolean;
  result: Message | boolean;
}

export type EditMessageLiveLocationCreateError = Error;

export interface StopMessageLiveLocationCreatePayload {
  /** Required if *inline\_message\_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id?: number | string;
  /** Required if *inline\_message\_id* is not specified. Identifier of the message with live location to stop */
  message_id?: number;
  /** Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message */
  inline_message_id?: string;
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
}

export interface StopMessageLiveLocationCreateData {
  /** @default true */
  ok: boolean;
  result: Message | boolean;
}

export type StopMessageLiveLocationCreateError = Error;

export interface SendVenueCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Latitude of the venue */
  latitude: number;
  /** Longitude of the venue */
  longitude: number;
  /** Name of the venue */
  title: string;
  /** Address of the venue */
  address: string;
  /** Foursquare identifier of the venue */
  foursquare_id?: string;
  /** Foursquare type of the venue, if known. (For example, “arts\_entertainment/default”, “arts\_entertainment/aquarium” or “food/icecream”.) */
  foursquare_type?: string;
  /** Google Places identifier of the venue */
  google_place_id?: string;
  /** Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).) */
  google_place_type?: string;
  /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** If the message is a reply, ID of the original message */
  reply_to_message_id?: number;
  /** Pass *True*, if the message should be sent even if the specified replied-to message is not found */
  allow_sending_without_reply?: boolean;
  /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}

export interface SendVenueCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a message. */
  result: Message;
}

export type SendVenueCreateError = Error;

export interface SendContactCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Contact's phone number */
  phone_number: string;
  /** Contact's first name */
  first_name: string;
  /** Contact's last name */
  last_name?: string;
  /** Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes */
  vcard?: string;
  /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** If the message is a reply, ID of the original message */
  reply_to_message_id?: number;
  /** Pass *True*, if the message should be sent even if the specified replied-to message is not found */
  allow_sending_without_reply?: boolean;
  /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove keyboard or to force a reply from the user. */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}

export interface SendContactCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a message. */
  result: Message;
}

export type SendContactCreateError = Error;

export interface SendPollCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Poll question, 1-300 characters */
  question: string;
  /** A JSON-serialized list of answer options, 2-10 strings 1-100 characters each */
  options: string[];
  /** True, if the poll needs to be anonymous, defaults to *True* */
  is_anonymous?: boolean;
  /** Poll type, “quiz” or “regular”, defaults to “regular” */
  type?: string;
  /** True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to *False* */
  allows_multiple_answers?: boolean;
  /** 0-based identifier of the correct answer option, required for polls in quiz mode */
  correct_option_id?: number;
  /** Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing */
  explanation?: string;
  /** Mode for parsing entities in the explanation. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  explanation_parse_mode?: string;
  /** List of special entities that appear in the poll explanation, which can be specified instead of *parse\_mode* */
  explanation_entities?: MessageEntity[];
  /** Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with *close\_date*. */
  open_period?: number;
  /** Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with *open\_period*. */
  close_date?: number;
  /** Pass *True*, if the poll needs to be immediately closed. This can be useful for poll preview. */
  is_closed?: boolean;
  /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** If the message is a reply, ID of the original message */
  reply_to_message_id?: number;
  /** Pass *True*, if the message should be sent even if the specified replied-to message is not found */
  allow_sending_without_reply?: boolean;
  /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}

export interface SendPollCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a message. */
  result: Message;
}

export type SendPollCreateError = Error;

export interface SendDiceCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /**
   * Emoji on which the dice throw animation is based. Currently, must be one of “<img alt="🎲" src="//telegram.org/img/emoji/40/F09F8EB2.png" height="20" width="20" />”, “<img alt="🎯" src="//telegram.org/img/emoji/40/F09F8EAF.png" height="20" width="20" />”, “<img alt="🏀" src="//telegram.org/img/emoji/40/F09F8F80.png" height="20" width="20" />”, “<img alt="⚽" src="//telegram.org/img/emoji/40/E29ABD.png" height="20" width="20" />”, or “<img alt="🎰" src="//telegram.org/img/emoji/40/F09F8EB0.png" height="20" width="20" />”. Dice can have values 1-6 for “<img alt="🎲" src="//telegram.org/img/emoji/40/F09F8EB2.png" height="20" width="20" />” and “<img alt="🎯" src="//telegram.org/img/emoji/40/F09F8EAF.png" height="20" width="20" />”, values 1-5 for “<img alt="🏀" src="//telegram.org/img/emoji/40/F09F8F80.png" height="20" width="20" />” and “<img alt="⚽" src="//telegram.org/img/emoji/40/E29ABD.png" height="20" width="20" />”, and values 1-64 for “<img alt="🎰" src="//telegram.org/img/emoji/40/F09F8EB0.png" height="20" width="20" />”. Defaults to “<img alt="🎲" src="//telegram.org/img/emoji/40/F09F8EB2.png" height="20" width="20" />”
   * @default "🎲"
   */
  emoji?: "🎲" | "🎯" | "🏀" | "⚽" | "🎰";
  /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** If the message is a reply, ID of the original message */
  reply_to_message_id?: number;
  /** Pass *True*, if the message should be sent even if the specified replied-to message is not found */
  allow_sending_without_reply?: boolean;
  /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}

export interface SendDiceCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a message. */
  result: Message;
}

export type SendDiceCreateError = Error;

export interface SendChatActionCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Type of action to broadcast. Choose one, depending on what the user is about to receive: *typing* for [text messages](https://core.telegram.org/bots/api/#sendmessage), *upload\_photo* for [photos](https://core.telegram.org/bots/api/#sendphoto), *record\_video* or *upload\_video* for [videos](https://core.telegram.org/bots/api/#sendvideo), *record\_voice* or *upload\_voice* for [voice notes](https://core.telegram.org/bots/api/#sendvoice), *upload\_document* for [general files](https://core.telegram.org/bots/api/#senddocument), *find\_location* for [location data](https://core.telegram.org/bots/api/#sendlocation), *record\_video\_note* or *upload\_video\_note* for [video notes](https://core.telegram.org/bots/api/#sendvideonote). */
  action: string;
}

export interface SendChatActionCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type SendChatActionCreateError = Error;

export interface GetUserProfilePhotosCreatePayload {
  /** Unique identifier of the target user */
  user_id: number;
  /** Sequential number of the first photo to be returned. By default, all photos are returned. */
  offset?: number;
  /**
   * Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.
   * @min 1
   * @max 100
   * @default 100
   */
  limit?: number;
}

export interface GetUserProfilePhotosCreateData {
  /** @default true */
  ok: boolean;
  /** This object represent a user's profile pictures. */
  result: UserProfilePhotos;
}

export type GetUserProfilePhotosCreateError = Error;

export interface GetFileCreatePayload {
  /** File identifier to get info about */
  file_id: string;
}

export interface GetFileCreateData {
  /** @default true */
  ok: boolean;
  /**
   * This object represents a file ready to be downloaded. The file can be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api/#getfile).
   *
   * Maximum file size to download is 20 MB
   */
  result: File;
}

export type GetFileCreateError = Error;

export interface KickChatMemberCreatePayload {
  /** Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Unique identifier of the target user */
  user_id: number;
  /** Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever */
  until_date?: number;
}

export interface KickChatMemberCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type KickChatMemberCreateError = Error;

export interface UnbanChatMemberCreatePayload {
  /** Unique identifier for the target group or username of the target supergroup or channel (in the format `@username`) */
  chat_id: number | string;
  /** Unique identifier of the target user */
  user_id: number;
  /** Do nothing if the user is not banned */
  only_if_banned?: boolean;
}

export interface UnbanChatMemberCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type UnbanChatMemberCreateError = Error;

export interface RestrictChatMemberCreatePayload {
  /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
  chat_id: number | string;
  /** Unique identifier of the target user */
  user_id: number;
  /** Describes actions that a non-administrator user is allowed to take in a chat. */
  permissions: ChatPermissions;
  /** Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever */
  until_date?: number;
}

export interface RestrictChatMemberCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type RestrictChatMemberCreateError = Error;

export interface PromoteChatMemberCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Unique identifier of the target user */
  user_id: number;
  /** Pass *True*, if the administrator's presence in the chat is hidden */
  is_anonymous?: boolean;
  /** Pass True, if the administrator can change chat title, photo and other settings */
  can_change_info?: boolean;
  /** Pass True, if the administrator can create channel posts, channels only */
  can_post_messages?: boolean;
  /** Pass True, if the administrator can edit messages of other users and can pin messages, channels only */
  can_edit_messages?: boolean;
  /** Pass True, if the administrator can delete messages of other users */
  can_delete_messages?: boolean;
  /** Pass True, if the administrator can invite new users to the chat */
  can_invite_users?: boolean;
  /** Pass True, if the administrator can restrict, ban or unban chat members */
  can_restrict_members?: boolean;
  /** Pass True, if the administrator can pin messages, supergroups only */
  can_pin_messages?: boolean;
  /** Pass True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by him) */
  can_promote_members?: boolean;
}

export interface PromoteChatMemberCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type PromoteChatMemberCreateError = Error;

export interface SetChatAdministratorCustomTitleCreatePayload {
  /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
  chat_id: number | string;
  /** Unique identifier of the target user */
  user_id: number;
  /** New custom title for the administrator; 0-16 characters, emoji are not allowed */
  custom_title: string;
}

export interface SetChatAdministratorCustomTitleCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type SetChatAdministratorCustomTitleCreateError = Error;

export interface SetChatPermissionsCreatePayload {
  /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
  chat_id: number | string;
  /** Describes actions that a non-administrator user is allowed to take in a chat. */
  permissions: ChatPermissions;
}

export interface SetChatPermissionsCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type SetChatPermissionsCreateError = Error;

export interface ExportChatInviteLinkCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
}

export interface ExportChatInviteLinkCreateData {
  /** @default true */
  ok: boolean;
  result: string;
}

export type ExportChatInviteLinkCreateError = Error;

export interface SetChatPhotoCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser. */
  photo: InputFile;
}

export interface SetChatPhotoCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type SetChatPhotoCreateError = Error;

export interface DeleteChatPhotoCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
}

export interface DeleteChatPhotoCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type DeleteChatPhotoCreateError = Error;

export interface SetChatTitleCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** New chat title, 1-255 characters */
  title: string;
}

export interface SetChatTitleCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type SetChatTitleCreateError = Error;

export interface SetChatDescriptionCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** New chat description, 0-255 characters */
  description?: string;
}

export interface SetChatDescriptionCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type SetChatDescriptionCreateError = Error;

export interface PinChatMessageCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Identifier of a message to pin */
  message_id: number;
  /** Pass *True*, if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats. */
  disable_notification?: boolean;
}

export interface PinChatMessageCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type PinChatMessageCreateError = Error;

export interface UnpinChatMessageCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Identifier of a message to unpin. If not specified, the most recent pinned message (by sending date) will be unpinned. */
  message_id?: number;
}

export interface UnpinChatMessageCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type UnpinChatMessageCreateError = Error;

export interface UnpinAllChatMessagesCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
}

export interface UnpinAllChatMessagesCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type UnpinAllChatMessagesCreateError = Error;

export interface LeaveChatCreatePayload {
  /** Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`) */
  chat_id: number | string;
}

export interface LeaveChatCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type LeaveChatCreateError = Error;

export interface GetChatCreatePayload {
  /** Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`) */
  chat_id: number | string;
}

export interface GetChatCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a chat. */
  result: Chat;
}

export type GetChatCreateError = Error;

export interface GetChatAdministratorsCreatePayload {
  /** Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`) */
  chat_id: number | string;
}

export interface GetChatAdministratorsCreateData {
  /** @default true */
  ok: boolean;
  result: ChatMember[];
}

export type GetChatAdministratorsCreateError = Error;

export interface GetChatMembersCountCreatePayload {
  /** Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`) */
  chat_id: number | string;
}

export interface GetChatMembersCountCreateData {
  /** @default true */
  ok: boolean;
  result: number;
}

export type GetChatMembersCountCreateError = Error;

export interface GetChatMemberCreatePayload {
  /** Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Unique identifier of the target user */
  user_id: number;
}

export interface GetChatMemberCreateData {
  /** @default true */
  ok: boolean;
  /** This object contains information about one member of a chat. */
  result: ChatMember;
}

export type GetChatMemberCreateError = Error;

export interface SetChatStickerSetCreatePayload {
  /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
  chat_id: number | string;
  /** Name of the sticker set to be set as the group sticker set */
  sticker_set_name: string;
}

export interface SetChatStickerSetCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type SetChatStickerSetCreateError = Error;

export interface DeleteChatStickerSetCreatePayload {
  /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
  chat_id: number | string;
}

export interface DeleteChatStickerSetCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type DeleteChatStickerSetCreateError = Error;

export interface AnswerCallbackQueryCreatePayload {
  /** Unique identifier for the query to be answered */
  callback_query_id: string;
  /** Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters */
  text?: string;
  /**
   * If *true*, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to *false*.
   * @default false
   */
  show_alert?: boolean;
  /**
   * URL that will be opened by the user's client. If you have created a [Game](https://core.telegram.org/bots/api/#game) and accepted the conditions via [@Botfather](https://t.me/botfather), specify the URL that opens your game — note that this will only work if the query comes from a [*callback\_game*](https://core.telegram.org/bots/api/#inlinekeyboardbutton) button.
   *
   * Otherwise, you may use links like `t.me/your_bot?start=XXXX` that open your bot with a parameter.
   */
  url?: string;
  /**
   * The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0.
   * @default 0
   */
  cache_time?: number;
}

export interface AnswerCallbackQueryCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type AnswerCallbackQueryCreateError = Error;

export interface SetMyCommandsCreatePayload {
  /** A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified. */
  commands: BotCommand[];
}

export interface SetMyCommandsCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type SetMyCommandsCreateError = Error;

export interface GetMyCommandsCreateData {
  /** @default true */
  ok: boolean;
  result: BotCommand[];
}

export type GetMyCommandsCreateError = Error;

export interface EditMessageTextCreatePayload {
  /** Required if *inline\_message\_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id?: number | string;
  /** Required if *inline\_message\_id* is not specified. Identifier of the message to edit */
  message_id?: number;
  /** Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message */
  inline_message_id?: string;
  /** New text of the message, 1-4096 characters after entities parsing */
  text: string;
  /** Mode for parsing entities in the message text. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** List of special entities that appear in message text, which can be specified instead of *parse\_mode* */
  entities?: MessageEntity[];
  /** Disables link previews for links in this message */
  disable_web_page_preview?: boolean;
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
}

export interface EditMessageTextCreateData {
  /** @default true */
  ok: boolean;
  result: Message | boolean;
}

export type EditMessageTextCreateError = Error;

export interface EditMessageCaptionCreatePayload {
  /** Required if *inline\_message\_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id?: number | string;
  /** Required if *inline\_message\_id* is not specified. Identifier of the message to edit */
  message_id?: number;
  /** Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message */
  inline_message_id?: string;
  /** New caption of the message, 0-1024 characters after entities parsing */
  caption?: string;
  /** Mode for parsing entities in the message caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. */
  parse_mode?: string;
  /** List of special entities that appear in the caption, which can be specified instead of *parse\_mode* */
  caption_entities?: MessageEntity[];
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
}

export interface EditMessageCaptionCreateData {
  /** @default true */
  ok: boolean;
  result: Message | boolean;
}

export type EditMessageCaptionCreateError = Error;

export interface EditMessageMediaCreatePayload {
  /** Required if *inline\_message\_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id?: number | string;
  /** Required if *inline\_message\_id* is not specified. Identifier of the message to edit */
  message_id?: number;
  /** Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message */
  inline_message_id?: string;
  /** This object represents the content of a media message to be sent. It should be one of */
  media: InputMedia;
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
}

export interface EditMessageMediaCreateData {
  /** @default true */
  ok: boolean;
  result: Message | boolean;
}

export type EditMessageMediaCreateError = Error;

export interface EditMessageReplyMarkupCreatePayload {
  /** Required if *inline\_message\_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id?: number | string;
  /** Required if *inline\_message\_id* is not specified. Identifier of the message to edit */
  message_id?: number;
  /** Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message */
  inline_message_id?: string;
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
}

export interface EditMessageReplyMarkupCreateData {
  /** @default true */
  ok: boolean;
  result: Message | boolean;
}

export type EditMessageReplyMarkupCreateError = Error;

export interface StopPollCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Identifier of the original message with the poll */
  message_id: number;
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
}

export interface StopPollCreateData {
  /** @default true */
  ok: boolean;
  /** This object contains information about a poll. */
  result: Poll;
}

export type StopPollCreateError = Error;

export interface DeleteMessageCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Identifier of the message to delete */
  message_id: number;
}

export interface DeleteMessageCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type DeleteMessageCreateError = Error;

export interface SendStickerCreatePayload {
  /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
  chat_id: number | string;
  /** Sticker to send. Pass a file\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  sticker: InputFile | string;
  /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** If the message is a reply, ID of the original message */
  reply_to_message_id?: number;
  /** Pass *True*, if the message should be sent even if the specified replied-to message is not found */
  allow_sending_without_reply?: boolean;
  /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}

export interface SendStickerCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a message. */
  result: Message;
}

export type SendStickerCreateError = Error;

export interface GetStickerSetCreatePayload {
  /** Name of the sticker set */
  name: string;
}

export interface GetStickerSetCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a sticker set. */
  result: StickerSet;
}

export type GetStickerSetCreateError = Error;

export interface UploadStickerFileCreatePayload {
  /** User identifier of sticker file owner */
  user_id: number;
  /** This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser. */
  png_sticker: InputFile;
}

export interface UploadStickerFileCreateData {
  /** @default true */
  ok: boolean;
  /**
   * This object represents a file ready to be downloaded. The file can be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api/#getfile).
   *
   * Maximum file size to download is 20 MB
   */
  result: File;
}

export type UploadStickerFileCreateError = Error;

export interface CreateNewStickerSetCreatePayload {
  /** User identifier of created sticker set owner */
  user_id: number;
  /** Short name of sticker set, to be used in `t.me/addstickers/` URLs (e.g., *animals*). Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in *“\_by\_<bot username>”*. *<bot\_username>* is case insensitive. 1-64 characters. */
  name: string;
  /** Sticker set title, 1-64 characters */
  title: string;
  /** **PNG** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a *file\_id* as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  png_sticker?: InputFile | string;
  /** This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser. */
  tgs_sticker?: InputFile;
  /** One or more emoji corresponding to the sticker */
  emojis: string;
  /** Pass *True*, if a set of mask stickers should be created */
  contains_masks?: boolean;
  /** This object describes the position on faces where a mask should be placed by default. */
  mask_position?: MaskPosition;
}

export interface CreateNewStickerSetCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type CreateNewStickerSetCreateError = Error;

export interface AddStickerToSetCreatePayload {
  /** User identifier of sticker set owner */
  user_id: number;
  /** Sticker set name */
  name: string;
  /** **PNG** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a *file\_id* as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) */
  png_sticker?: InputFile | string;
  /** This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser. */
  tgs_sticker?: InputFile;
  /** One or more emoji corresponding to the sticker */
  emojis: string;
  /** This object describes the position on faces where a mask should be placed by default. */
  mask_position?: MaskPosition;
}

export interface AddStickerToSetCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type AddStickerToSetCreateError = Error;

export interface SetStickerPositionInSetCreatePayload {
  /** File identifier of the sticker */
  sticker: string;
  /** New sticker position in the set, zero-based */
  position: number;
}

export interface SetStickerPositionInSetCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type SetStickerPositionInSetCreateError = Error;

export interface DeleteStickerFromSetCreatePayload {
  /** File identifier of the sticker */
  sticker: string;
}

export interface DeleteStickerFromSetCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type DeleteStickerFromSetCreateError = Error;

export interface SetStickerSetThumbCreatePayload {
  /** Sticker set name */
  name: string;
  /** User identifier of the sticker set owner */
  user_id: number;
  /** A **PNG** image with the thumbnail, must be up to 128 kilobytes in size and have width and height exactly 100px, or a **TGS** animation with the thumbnail up to 32 kilobytes in size; see [](https://core.telegram.org/animated_stickers#technical-requirements)[https://core.telegram.org/animated\_stickers#technical-requirements](https://core.telegram.org/animated_stickers#technical-requirements) for animated sticker technical requirements. Pass a *file\_id* as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files). Animated sticker set thumbnail can't be uploaded via HTTP URL. */
  thumb?: InputFile | string;
}

export interface SetStickerSetThumbCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type SetStickerSetThumbCreateError = Error;

export interface AnswerInlineQueryCreatePayload {
  /** Unique identifier for the answered query */
  inline_query_id: string;
  /** A JSON-serialized array of results for the inline query */
  results: InlineQueryResult[];
  /**
   * The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.
   * @default 300
   */
  cache_time?: number;
  /** Pass *True*, if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query */
  is_personal?: boolean;
  /** Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes. */
  next_offset?: string;
  /** If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with the parameter *switch\_pm\_parameter* */
  switch_pm_text?: string;
  /**
   * [Deep-linking](/bots#deep-linking) parameter for the /start message sent to the bot when user presses the switch button. 1-64 characters, only `A-Z`, `a-z`, `0-9`, `_` and `-` are allowed.
   *
   * *Example:* An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an oauth link. Once done, the bot can offer a [*switch\_inline*](https://core.telegram.org/bots/api/#inlinekeyboardmarkup) button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.
   */
  switch_pm_parameter?: string;
}

export interface AnswerInlineQueryCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type AnswerInlineQueryCreateError = Error;

export interface SendInvoiceCreatePayload {
  /** Unique identifier for the target private chat */
  chat_id: number;
  /** Product name, 1-32 characters */
  title: string;
  /** Product description, 1-255 characters */
  description: string;
  /** Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. */
  payload: string;
  /** Payments provider token, obtained via [Botfather](https://t.me/botfather) */
  provider_token: string;
  /** Unique deep-linking parameter that can be used to generate this invoice when used as a start parameter */
  start_parameter: string;
  /** Three-letter ISO 4217 currency code, see [more on currencies](/bots/payments#supported-currencies) */
  currency: string;
  /** Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.) */
  prices: LabeledPrice[];
  /** A JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. */
  provider_data?: string;
  /** URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for. */
  photo_url?: string;
  /** Photo size */
  photo_size?: number;
  /** Photo width */
  photo_width?: number;
  /** Photo height */
  photo_height?: number;
  /** Pass *True*, if you require the user's full name to complete the order */
  need_name?: boolean;
  /** Pass *True*, if you require the user's phone number to complete the order */
  need_phone_number?: boolean;
  /** Pass *True*, if you require the user's email address to complete the order */
  need_email?: boolean;
  /** Pass *True*, if you require the user's shipping address to complete the order */
  need_shipping_address?: boolean;
  /** Pass *True*, if user's phone number should be sent to provider */
  send_phone_number_to_provider?: boolean;
  /** Pass *True*, if user's email address should be sent to provider */
  send_email_to_provider?: boolean;
  /** Pass *True*, if the final price depends on the shipping method */
  is_flexible?: boolean;
  /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** If the message is a reply, ID of the original message */
  reply_to_message_id?: number;
  /** Pass *True*, if the message should be sent even if the specified replied-to message is not found */
  allow_sending_without_reply?: boolean;
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
}

export interface SendInvoiceCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a message. */
  result: Message;
}

export type SendInvoiceCreateError = Error;

export interface AnswerShippingQueryCreatePayload {
  /** Unique identifier for the query to be answered */
  shipping_query_id: string;
  /** Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible) */
  ok: boolean;
  /** Required if *ok* is True. A JSON-serialized array of available shipping options. */
  shipping_options?: ShippingOption[];
  /** Required if *ok* is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user. */
  error_message?: string;
}

export interface AnswerShippingQueryCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type AnswerShippingQueryCreateError = Error;

export interface AnswerPreCheckoutQueryCreatePayload {
  /** Unique identifier for the query to be answered */
  pre_checkout_query_id: string;
  /** Specify *True* if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use *False* if there are any problems. */
  ok: boolean;
  /** Required if *ok* is *False*. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user. */
  error_message?: string;
}

export interface AnswerPreCheckoutQueryCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type AnswerPreCheckoutQueryCreateError = Error;

export interface SetPassportDataErrorsCreatePayload {
  /** User identifier */
  user_id: number;
  /** A JSON-serialized array describing the errors */
  errors: PassportElementError[];
}

export interface SetPassportDataErrorsCreateData {
  /** @default true */
  ok: boolean;
  /** @default true */
  result: boolean;
}

export type SetPassportDataErrorsCreateError = Error;

export interface SendGameCreatePayload {
  /** Unique identifier for the target chat */
  chat_id: number;
  /** Short name of the game, serves as the unique identifier for the game. Set up your games via [Botfather](https://t.me/botfather). */
  game_short_name: string;
  /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** If the message is a reply, ID of the original message */
  reply_to_message_id?: number;
  /** Pass *True*, if the message should be sent even if the specified replied-to message is not found */
  allow_sending_without_reply?: boolean;
  /** This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to. */
  reply_markup?: InlineKeyboardMarkup;
}

export interface SendGameCreateData {
  /** @default true */
  ok: boolean;
  /** This object represents a message. */
  result: Message;
}

export type SendGameCreateError = Error;

export interface SetGameScoreCreatePayload {
  /** User identifier */
  user_id: number;
  /** New score, must be non-negative */
  score: number;
  /** Pass True, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
  force?: boolean;
  /** Pass True, if the game message should not be automatically edited to include the current scoreboard */
  disable_edit_message?: boolean;
  /** Required if *inline\_message\_id* is not specified. Unique identifier for the target chat */
  chat_id?: number;
  /** Required if *inline\_message\_id* is not specified. Identifier of the sent message */
  message_id?: number;
  /** Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message */
  inline_message_id?: string;
}

export interface SetGameScoreCreateData {
  /** @default true */
  ok: boolean;
  result: Message | boolean;
}

export type SetGameScoreCreateError = Error;

export interface GetGameHighScoresCreatePayload {
  /** Target user id */
  user_id: number;
  /** Required if *inline\_message\_id* is not specified. Unique identifier for the target chat */
  chat_id?: number;
  /** Required if *inline\_message\_id* is not specified. Identifier of the sent message */
  message_id?: number;
  /** Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message */
  inline_message_id?: string;
}

export interface GetGameHighScoresCreateData {
  /** @default true */
  ok: boolean;
  result: GameHighScore[];
}

export type GetGameHighScoresCreateError = Error;
