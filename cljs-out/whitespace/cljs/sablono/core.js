// Compiled by ClojureScript 0.0-2138
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
var G__36470__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__36469 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__36469,0,null);var body = cljs.core.nthnext.call(null,vec__36469,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__36470 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__36470__delegate.call(this,args);};
G__36470.cljs$lang$maxFixedArity = 0;
G__36470.cljs$lang$applyTo = (function (arglist__36471){
var args = cljs.core.seq(arglist__36471);
return G__36470__delegate(args);
});
G__36470.cljs$core$IFn$_invoke$arity$variadic = G__36470__delegate;
return G__36470;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__36476(s__36477){return (new cljs.core.LazySeq(null,(function (){var s__36477__$1 = s__36477;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36477__$1);if(temp__4092__auto__)
{var s__36477__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36477__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36477__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36479 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36478 = 0;while(true){
if((i__36478 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__36478);cljs.core.chunk_append.call(null,b__36479,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__36480 = (i__36478 + 1);
i__36478 = G__36480;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36479),iter__36476.call(null,cljs.core.chunk_rest.call(null,s__36477__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36479),null);
}
} else
{var args = cljs.core.first.call(null,s__36477__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__36476.call(null,cljs.core.rest.call(null,s__36477__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__36481_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__36481_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__36486(s__36487){return (new cljs.core.LazySeq(null,(function (){var s__36487__$1 = s__36487;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36487__$1);if(temp__4092__auto__)
{var s__36487__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36487__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36487__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36489 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36488 = 0;while(true){
if((i__36488 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__36488);cljs.core.chunk_append.call(null,b__36489,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__36490 = (i__36488 + 1);
i__36488 = G__36490;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36489),iter__36486.call(null,cljs.core.chunk_rest.call(null,s__36487__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36489),null);
}
} else
{var style = cljs.core.first.call(null,s__36487__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__36486.call(null,cljs.core.rest.call(null,s__36487__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__36491){
var styles = cljs.core.seq(arglist__36491);
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
sablono.core.link_to36492 = (function() { 
var link_to36492__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to36492 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to36492__delegate.call(this,url,content);};
link_to36492.cljs$lang$maxFixedArity = 1;
link_to36492.cljs$lang$applyTo = (function (arglist__36493){
var url = cljs.core.first(arglist__36493);
var content = cljs.core.rest(arglist__36493);
return link_to36492__delegate(url,content);
});
link_to36492.cljs$core$IFn$_invoke$arity$variadic = link_to36492__delegate;
return link_to36492;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to36492);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to36494 = (function() { 
var mail_to36494__delegate = function (e_mail,p__36495){var vec__36497 = p__36495;var content = cljs.core.nth.call(null,vec__36497,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to36494 = function (e_mail,var_args){
var p__36495 = null;if (arguments.length > 1) {
  p__36495 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to36494__delegate.call(this,e_mail,p__36495);};
mail_to36494.cljs$lang$maxFixedArity = 1;
mail_to36494.cljs$lang$applyTo = (function (arglist__36498){
var e_mail = cljs.core.first(arglist__36498);
var p__36495 = cljs.core.rest(arglist__36498);
return mail_to36494__delegate(e_mail,p__36495);
});
mail_to36494.cljs$core$IFn$_invoke$arity$variadic = mail_to36494__delegate;
return mail_to36494;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to36494);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list36499 = (function unordered_list36499(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__36504(s__36505){return (new cljs.core.LazySeq(null,(function (){var s__36505__$1 = s__36505;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36505__$1);if(temp__4092__auto__)
{var s__36505__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36505__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36505__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36507 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36506 = 0;while(true){
if((i__36506 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__36506);cljs.core.chunk_append.call(null,b__36507,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__36508 = (i__36506 + 1);
i__36506 = G__36508;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36507),iter__36504.call(null,cljs.core.chunk_rest.call(null,s__36505__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36507),null);
}
} else
{var x = cljs.core.first.call(null,s__36505__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__36504.call(null,cljs.core.rest.call(null,s__36505__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list36499);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list36509 = (function ordered_list36509(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__36514(s__36515){return (new cljs.core.LazySeq(null,(function (){var s__36515__$1 = s__36515;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36515__$1);if(temp__4092__auto__)
{var s__36515__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36515__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36515__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36517 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36516 = 0;while(true){
if((i__36516 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__36516);cljs.core.chunk_append.call(null,b__36517,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__36518 = (i__36516 + 1);
i__36516 = G__36518;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36517),iter__36514.call(null,cljs.core.chunk_rest.call(null,s__36515__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36517),null);
}
} else
{var x = cljs.core.first.call(null,s__36515__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__36514.call(null,cljs.core.rest.call(null,s__36515__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list36509);
/**
* Create an image element.
*/
sablono.core.image36519 = (function() {
var image36519 = null;
var image36519__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image36519__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image36519 = function(src,alt){
switch(arguments.length){
case 1:
return image36519__1.call(this,src);
case 2:
return image36519__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image36519.cljs$core$IFn$_invoke$arity$1 = image36519__1;
image36519.cljs$core$IFn$_invoke$arity$2 = image36519__2;
return image36519;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image36519);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__36520_SHARP_,p2__36521_SHARP_){return [cljs.core.str(p1__36520_SHARP_),cljs.core.str("["),cljs.core.str(p2__36521_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__36522_SHARP_,p2__36523_SHARP_){return [cljs.core.str(p1__36522_SHARP_),cljs.core.str("-"),cljs.core.str(p2__36523_SHARP_)].join('');
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
sablono.core.hidden_field36524 = (function() {
var hidden_field36524 = null;
var hidden_field36524__1 = (function (name){return hidden_field36524.call(null,name,null);
});
var hidden_field36524__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field36524 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field36524__1.call(this,name);
case 2:
return hidden_field36524__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field36524.cljs$core$IFn$_invoke$arity$1 = hidden_field36524__1;
hidden_field36524.cljs$core$IFn$_invoke$arity$2 = hidden_field36524__2;
return hidden_field36524;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field36524);
/**
* Creates a new text input field.
*/
sablono.core.text_field36525 = (function() {
var text_field36525 = null;
var text_field36525__1 = (function (name){return text_field36525.call(null,name,null);
});
var text_field36525__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field36525 = function(name,value){
switch(arguments.length){
case 1:
return text_field36525__1.call(this,name);
case 2:
return text_field36525__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field36525.cljs$core$IFn$_invoke$arity$1 = text_field36525__1;
text_field36525.cljs$core$IFn$_invoke$arity$2 = text_field36525__2;
return text_field36525;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field36525);
/**
* Creates a new password field.
*/
sablono.core.password_field36526 = (function() {
var password_field36526 = null;
var password_field36526__1 = (function (name){return password_field36526.call(null,name,null);
});
var password_field36526__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field36526 = function(name,value){
switch(arguments.length){
case 1:
return password_field36526__1.call(this,name);
case 2:
return password_field36526__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field36526.cljs$core$IFn$_invoke$arity$1 = password_field36526__1;
password_field36526.cljs$core$IFn$_invoke$arity$2 = password_field36526__2;
return password_field36526;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field36526);
/**
* Creates a new email input field.
*/
sablono.core.email_field36527 = (function() {
var email_field36527 = null;
var email_field36527__1 = (function (name){return email_field36527.call(null,name,null);
});
var email_field36527__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field36527 = function(name,value){
switch(arguments.length){
case 1:
return email_field36527__1.call(this,name);
case 2:
return email_field36527__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field36527.cljs$core$IFn$_invoke$arity$1 = email_field36527__1;
email_field36527.cljs$core$IFn$_invoke$arity$2 = email_field36527__2;
return email_field36527;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field36527);
/**
* Creates a check box.
*/
sablono.core.check_box36528 = (function() {
var check_box36528 = null;
var check_box36528__1 = (function (name){return check_box36528.call(null,name,null);
});
var check_box36528__2 = (function (name,checked_QMARK_){return check_box36528.call(null,name,checked_QMARK_,"true");
});
var check_box36528__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box36528 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box36528__1.call(this,name);
case 2:
return check_box36528__2.call(this,name,checked_QMARK_);
case 3:
return check_box36528__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box36528.cljs$core$IFn$_invoke$arity$1 = check_box36528__1;
check_box36528.cljs$core$IFn$_invoke$arity$2 = check_box36528__2;
check_box36528.cljs$core$IFn$_invoke$arity$3 = check_box36528__3;
return check_box36528;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box36528);
/**
* Creates a radio button.
*/
sablono.core.radio_button36529 = (function() {
var radio_button36529 = null;
var radio_button36529__1 = (function (group){return radio_button36529.call(null,group,null);
});
var radio_button36529__2 = (function (group,checked_QMARK_){return radio_button36529.call(null,group,checked_QMARK_,"true");
});
var radio_button36529__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button36529 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button36529__1.call(this,group);
case 2:
return radio_button36529__2.call(this,group,checked_QMARK_);
case 3:
return radio_button36529__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button36529.cljs$core$IFn$_invoke$arity$1 = radio_button36529__1;
radio_button36529.cljs$core$IFn$_invoke$arity$2 = radio_button36529__2;
radio_button36529.cljs$core$IFn$_invoke$arity$3 = radio_button36529__3;
return radio_button36529;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button36529);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options36530 = (function() {
var select_options36530 = null;
var select_options36530__1 = (function (coll){return select_options36530.call(null,coll,null);
});
var select_options36530__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__36539(s__36540){return (new cljs.core.LazySeq(null,(function (){var s__36540__$1 = s__36540;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36540__$1);if(temp__4092__auto__)
{var s__36540__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36540__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36540__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36542 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36541 = 0;while(true){
if((i__36541 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__36541);cljs.core.chunk_append.call(null,b__36542,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36545 = x;var text = cljs.core.nth.call(null,vec__36545,0,null);var val = cljs.core.nth.call(null,vec__36545,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options36530.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__36547 = (i__36541 + 1);
i__36541 = G__36547;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36542),iter__36539.call(null,cljs.core.chunk_rest.call(null,s__36540__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36542),null);
}
} else
{var x = cljs.core.first.call(null,s__36540__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36546 = x;var text = cljs.core.nth.call(null,vec__36546,0,null);var val = cljs.core.nth.call(null,vec__36546,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options36530.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__36539.call(null,cljs.core.rest.call(null,s__36540__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options36530 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options36530__1.call(this,coll);
case 2:
return select_options36530__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options36530.cljs$core$IFn$_invoke$arity$1 = select_options36530__1;
select_options36530.cljs$core$IFn$_invoke$arity$2 = select_options36530__2;
return select_options36530;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options36530);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down36548 = (function() {
var drop_down36548 = null;
var drop_down36548__2 = (function (name,options){return drop_down36548.call(null,name,options,null);
});
var drop_down36548__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down36548 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down36548__2.call(this,name,options);
case 3:
return drop_down36548__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down36548.cljs$core$IFn$_invoke$arity$2 = drop_down36548__2;
drop_down36548.cljs$core$IFn$_invoke$arity$3 = drop_down36548__3;
return drop_down36548;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down36548);
/**
* Creates a text area element.
*/
sablono.core.text_area36549 = (function() {
var text_area36549 = null;
var text_area36549__1 = (function (name){return text_area36549.call(null,name,null);
});
var text_area36549__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area36549 = function(name,value){
switch(arguments.length){
case 1:
return text_area36549__1.call(this,name);
case 2:
return text_area36549__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area36549.cljs$core$IFn$_invoke$arity$1 = text_area36549__1;
text_area36549.cljs$core$IFn$_invoke$arity$2 = text_area36549__2;
return text_area36549;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area36549);
/**
* Creates a file upload input.
*/
sablono.core.file_upload36550 = (function file_upload36550(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload36550);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label36551 = (function label36551(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label36551);
/**
* Creates a submit button.
*/
sablono.core.submit_button36552 = (function submit_button36552(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button36552);
/**
* Creates a form reset button.
*/
sablono.core.reset_button36553 = (function reset_button36553(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button36553);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to36554 = (function() { 
var form_to36554__delegate = function (p__36555,body){var vec__36557 = p__36555;var method = cljs.core.nth.call(null,vec__36557,0,null);var action = cljs.core.nth.call(null,vec__36557,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to36554 = function (p__36555,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to36554__delegate.call(this,p__36555,body);};
form_to36554.cljs$lang$maxFixedArity = 1;
form_to36554.cljs$lang$applyTo = (function (arglist__36558){
var p__36555 = cljs.core.first(arglist__36558);
var body = cljs.core.rest(arglist__36558);
return form_to36554__delegate(p__36555,body);
});
form_to36554.cljs$core$IFn$_invoke$arity$variadic = form_to36554__delegate;
return form_to36554;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to36554);
