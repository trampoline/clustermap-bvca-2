// Compiled by ClojureScript 0.0-2173
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__28034__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__28033 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__28033,0,null);var body = cljs.core.nthnext.call(null,vec__28033,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__28034 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__28034__delegate.call(this,args);};
G__28034.cljs$lang$maxFixedArity = 0;
G__28034.cljs$lang$applyTo = (function (arglist__28035){
var args = cljs.core.seq(arglist__28035);
return G__28034__delegate(args);
});
G__28034.cljs$core$IFn$_invoke$arity$variadic = G__28034__delegate;
return G__28034;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4158__auto__ = (function iter__28040(s__28041){return (new cljs.core.LazySeq(null,(function (){var s__28041__$1 = s__28041;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28041__$1);if(temp__4092__auto__)
{var s__28041__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28041__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__28041__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__28043 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__28042 = 0;while(true){
if((i__28042 < size__4157__auto__))
{var args = cljs.core._nth.call(null,c__4156__auto__,i__28042);cljs.core.chunk_append.call(null,b__28043,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__28044 = (i__28042 + 1);
i__28042 = G__28044;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28043),iter__28040.call(null,cljs.core.chunk_rest.call(null,s__28041__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28043),null);
}
} else
{var args = cljs.core.first.call(null,s__28041__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__28040.call(null,cljs.core.rest.call(null,s__28041__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__28045_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__28045_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4158__auto__ = (function iter__28050(s__28051){return (new cljs.core.LazySeq(null,(function (){var s__28051__$1 = s__28051;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28051__$1);if(temp__4092__auto__)
{var s__28051__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28051__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__28051__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__28053 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__28052 = 0;while(true){
if((i__28052 < size__4157__auto__))
{var style = cljs.core._nth.call(null,c__4156__auto__,i__28052);cljs.core.chunk_append.call(null,b__28053,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__28054 = (i__28052 + 1);
i__28052 = G__28054;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28053),iter__28050.call(null,cljs.core.chunk_rest.call(null,s__28051__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28053),null);
}
} else
{var style = cljs.core.first.call(null,s__28051__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__28050.call(null,cljs.core.rest.call(null,s__28051__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__28055){
var styles = cljs.core.seq(arglist__28055);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.8.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to28056 = (function() { 
var link_to28056__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to28056 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to28056__delegate.call(this,url,content);};
link_to28056.cljs$lang$maxFixedArity = 1;
link_to28056.cljs$lang$applyTo = (function (arglist__28057){
var url = cljs.core.first(arglist__28057);
var content = cljs.core.rest(arglist__28057);
return link_to28056__delegate(url,content);
});
link_to28056.cljs$core$IFn$_invoke$arity$variadic = link_to28056__delegate;
return link_to28056;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to28056);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to28058 = (function() { 
var mail_to28058__delegate = function (e_mail,p__28059){var vec__28061 = p__28059;var content = cljs.core.nth.call(null,vec__28061,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3441__auto__ = content;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to28058 = function (e_mail,var_args){
var p__28059 = null;if (arguments.length > 1) {
  p__28059 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to28058__delegate.call(this,e_mail,p__28059);};
mail_to28058.cljs$lang$maxFixedArity = 1;
mail_to28058.cljs$lang$applyTo = (function (arglist__28062){
var e_mail = cljs.core.first(arglist__28062);
var p__28059 = cljs.core.rest(arglist__28062);
return mail_to28058__delegate(e_mail,p__28059);
});
mail_to28058.cljs$core$IFn$_invoke$arity$variadic = mail_to28058__delegate;
return mail_to28058;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to28058);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list28063 = (function unordered_list28063(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4158__auto__ = (function iter__28068(s__28069){return (new cljs.core.LazySeq(null,(function (){var s__28069__$1 = s__28069;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28069__$1);if(temp__4092__auto__)
{var s__28069__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28069__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__28069__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__28071 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__28070 = 0;while(true){
if((i__28070 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__28070);cljs.core.chunk_append.call(null,b__28071,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__28072 = (i__28070 + 1);
i__28070 = G__28072;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28071),iter__28068.call(null,cljs.core.chunk_rest.call(null,s__28069__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28071),null);
}
} else
{var x = cljs.core.first.call(null,s__28069__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__28068.call(null,cljs.core.rest.call(null,s__28069__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list28063);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list28073 = (function ordered_list28073(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4158__auto__ = (function iter__28078(s__28079){return (new cljs.core.LazySeq(null,(function (){var s__28079__$1 = s__28079;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28079__$1);if(temp__4092__auto__)
{var s__28079__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28079__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__28079__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__28081 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__28080 = 0;while(true){
if((i__28080 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__28080);cljs.core.chunk_append.call(null,b__28081,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__28082 = (i__28080 + 1);
i__28080 = G__28082;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28081),iter__28078.call(null,cljs.core.chunk_rest.call(null,s__28079__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28081),null);
}
} else
{var x = cljs.core.first.call(null,s__28079__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__28078.call(null,cljs.core.rest.call(null,s__28079__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list28073);
/**
* Create an image element.
*/
sablono.core.image28083 = (function() {
var image28083 = null;
var image28083__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image28083__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image28083 = function(src,alt){
switch(arguments.length){
case 1:
return image28083__1.call(this,src);
case 2:
return image28083__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image28083.cljs$core$IFn$_invoke$arity$1 = image28083__1;
image28083.cljs$core$IFn$_invoke$arity$2 = image28083__2;
return image28083;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image28083);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__28084_SHARP_,p2__28085_SHARP_){return [cljs.core.str(p1__28084_SHARP_),cljs.core.str("["),cljs.core.str(p2__28085_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__28086_SHARP_,p2__28087_SHARP_){return [cljs.core.str(p1__28086_SHARP_),cljs.core.str("-"),cljs.core.str(p2__28087_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field28088 = (function() {
var hidden_field28088 = null;
var hidden_field28088__1 = (function (name){return hidden_field28088.call(null,name,null);
});
var hidden_field28088__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field28088 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field28088__1.call(this,name);
case 2:
return hidden_field28088__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field28088.cljs$core$IFn$_invoke$arity$1 = hidden_field28088__1;
hidden_field28088.cljs$core$IFn$_invoke$arity$2 = hidden_field28088__2;
return hidden_field28088;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field28088);
/**
* Creates a new text input field.
*/
sablono.core.text_field28089 = (function() {
var text_field28089 = null;
var text_field28089__1 = (function (name){return text_field28089.call(null,name,null);
});
var text_field28089__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field28089 = function(name,value){
switch(arguments.length){
case 1:
return text_field28089__1.call(this,name);
case 2:
return text_field28089__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field28089.cljs$core$IFn$_invoke$arity$1 = text_field28089__1;
text_field28089.cljs$core$IFn$_invoke$arity$2 = text_field28089__2;
return text_field28089;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28089);
/**
* Creates a new password field.
*/
sablono.core.password_field28090 = (function() {
var password_field28090 = null;
var password_field28090__1 = (function (name){return password_field28090.call(null,name,null);
});
var password_field28090__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field28090 = function(name,value){
switch(arguments.length){
case 1:
return password_field28090__1.call(this,name);
case 2:
return password_field28090__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field28090.cljs$core$IFn$_invoke$arity$1 = password_field28090__1;
password_field28090.cljs$core$IFn$_invoke$arity$2 = password_field28090__2;
return password_field28090;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field28090);
/**
* Creates a new email input field.
*/
sablono.core.email_field28091 = (function() {
var email_field28091 = null;
var email_field28091__1 = (function (name){return email_field28091.call(null,name,null);
});
var email_field28091__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field28091 = function(name,value){
switch(arguments.length){
case 1:
return email_field28091__1.call(this,name);
case 2:
return email_field28091__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field28091.cljs$core$IFn$_invoke$arity$1 = email_field28091__1;
email_field28091.cljs$core$IFn$_invoke$arity$2 = email_field28091__2;
return email_field28091;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field28091);
/**
* Creates a check box.
*/
sablono.core.check_box28092 = (function() {
var check_box28092 = null;
var check_box28092__1 = (function (name){return check_box28092.call(null,name,null);
});
var check_box28092__2 = (function (name,checked_QMARK_){return check_box28092.call(null,name,checked_QMARK_,"true");
});
var check_box28092__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box28092 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box28092__1.call(this,name);
case 2:
return check_box28092__2.call(this,name,checked_QMARK_);
case 3:
return check_box28092__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box28092.cljs$core$IFn$_invoke$arity$1 = check_box28092__1;
check_box28092.cljs$core$IFn$_invoke$arity$2 = check_box28092__2;
check_box28092.cljs$core$IFn$_invoke$arity$3 = check_box28092__3;
return check_box28092;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box28092);
/**
* Creates a radio button.
*/
sablono.core.radio_button28093 = (function() {
var radio_button28093 = null;
var radio_button28093__1 = (function (group){return radio_button28093.call(null,group,null);
});
var radio_button28093__2 = (function (group,checked_QMARK_){return radio_button28093.call(null,group,checked_QMARK_,"true");
});
var radio_button28093__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button28093 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button28093__1.call(this,group);
case 2:
return radio_button28093__2.call(this,group,checked_QMARK_);
case 3:
return radio_button28093__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button28093.cljs$core$IFn$_invoke$arity$1 = radio_button28093__1;
radio_button28093.cljs$core$IFn$_invoke$arity$2 = radio_button28093__2;
radio_button28093.cljs$core$IFn$_invoke$arity$3 = radio_button28093__3;
return radio_button28093;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button28093);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options28094 = (function() {
var select_options28094 = null;
var select_options28094__1 = (function (coll){return select_options28094.call(null,coll,null);
});
var select_options28094__2 = (function (coll,selected){var iter__4158__auto__ = (function iter__28103(s__28104){return (new cljs.core.LazySeq(null,(function (){var s__28104__$1 = s__28104;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28104__$1);if(temp__4092__auto__)
{var s__28104__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28104__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__28104__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__28106 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__28105 = 0;while(true){
if((i__28105 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__28105);cljs.core.chunk_append.call(null,b__28106,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28109 = x;var text = cljs.core.nth.call(null,vec__28109,0,null);var val = cljs.core.nth.call(null,vec__28109,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options28094.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__28111 = (i__28105 + 1);
i__28105 = G__28111;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28106),iter__28103.call(null,cljs.core.chunk_rest.call(null,s__28104__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28106),null);
}
} else
{var x = cljs.core.first.call(null,s__28104__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28110 = x;var text = cljs.core.nth.call(null,vec__28110,0,null);var val = cljs.core.nth.call(null,vec__28110,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options28094.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__28103.call(null,cljs.core.rest.call(null,s__28104__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
});
select_options28094 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options28094__1.call(this,coll);
case 2:
return select_options28094__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options28094.cljs$core$IFn$_invoke$arity$1 = select_options28094__1;
select_options28094.cljs$core$IFn$_invoke$arity$2 = select_options28094__2;
return select_options28094;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options28094);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down28112 = (function() {
var drop_down28112 = null;
var drop_down28112__2 = (function (name,options){return drop_down28112.call(null,name,options,null);
});
var drop_down28112__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down28112 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down28112__2.call(this,name,options);
case 3:
return drop_down28112__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down28112.cljs$core$IFn$_invoke$arity$2 = drop_down28112__2;
drop_down28112.cljs$core$IFn$_invoke$arity$3 = drop_down28112__3;
return drop_down28112;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down28112);
/**
* Creates a text area element.
*/
sablono.core.text_area28113 = (function() {
var text_area28113 = null;
var text_area28113__1 = (function (name){return text_area28113.call(null,name,null);
});
var text_area28113__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area28113 = function(name,value){
switch(arguments.length){
case 1:
return text_area28113__1.call(this,name);
case 2:
return text_area28113__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area28113.cljs$core$IFn$_invoke$arity$1 = text_area28113__1;
text_area28113.cljs$core$IFn$_invoke$arity$2 = text_area28113__2;
return text_area28113;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area28113);
/**
* Creates a file upload input.
*/
sablono.core.file_upload28114 = (function file_upload28114(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload28114);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label28115 = (function label28115(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label28115);
/**
* Creates a submit button.
*/
sablono.core.submit_button28116 = (function submit_button28116(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button28116);
/**
* Creates a form reset button.
*/
sablono.core.reset_button28117 = (function reset_button28117(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button28117);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to28118 = (function() { 
var form_to28118__delegate = function (p__28119,body){var vec__28121 = p__28119;var method = cljs.core.nth.call(null,vec__28121,0,null);var action = cljs.core.nth.call(null,vec__28121,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to28118 = function (p__28119,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to28118__delegate.call(this,p__28119,body);};
form_to28118.cljs$lang$maxFixedArity = 1;
form_to28118.cljs$lang$applyTo = (function (arglist__28122){
var p__28119 = cljs.core.first(arglist__28122);
var body = cljs.core.rest(arglist__28122);
return form_to28118__delegate(p__28119,body);
});
form_to28118.cljs$core$IFn$_invoke$arity$variadic = form_to28118__delegate;
return form_to28118;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to28118);

//# sourceMappingURL=core.js.map