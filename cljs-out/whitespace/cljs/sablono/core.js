// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__35935__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__35934 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__35934,0,null);var body = cljs.core.nthnext.call(null,vec__35934,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__35935 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__35935__delegate.call(this,args);};
G__35935.cljs$lang$maxFixedArity = 0;
G__35935.cljs$lang$applyTo = (function (arglist__35936){
var args = cljs.core.seq(arglist__35936);
return G__35935__delegate(args);
});
G__35935.cljs$core$IFn$_invoke$arity$variadic = G__35935__delegate;
return G__35935;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__35941(s__35942){return (new cljs.core.LazySeq(null,(function (){var s__35942__$1 = s__35942;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35942__$1);if(temp__4092__auto__)
{var s__35942__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35942__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35942__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35944 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35943 = 0;while(true){
if((i__35943 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__35943);cljs.core.chunk_append.call(null,b__35944,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__35945 = (i__35943 + 1);
i__35943 = G__35945;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35944),iter__35941.call(null,cljs.core.chunk_rest.call(null,s__35942__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35944),null);
}
} else
{var args = cljs.core.first.call(null,s__35942__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__35941.call(null,cljs.core.rest.call(null,s__35942__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__35946_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__35946_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__35951(s__35952){return (new cljs.core.LazySeq(null,(function (){var s__35952__$1 = s__35952;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35952__$1);if(temp__4092__auto__)
{var s__35952__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35952__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35952__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35954 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35953 = 0;while(true){
if((i__35953 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__35953);cljs.core.chunk_append.call(null,b__35954,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__35955 = (i__35953 + 1);
i__35953 = G__35955;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35954),iter__35951.call(null,cljs.core.chunk_rest.call(null,s__35952__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35954),null);
}
} else
{var style = cljs.core.first.call(null,s__35952__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__35951.call(null,cljs.core.rest.call(null,s__35952__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__35956){
var styles = cljs.core.seq(arglist__35956);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to35957 = (function() { 
var link_to35957__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to35957 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to35957__delegate.call(this,url,content);};
link_to35957.cljs$lang$maxFixedArity = 1;
link_to35957.cljs$lang$applyTo = (function (arglist__35958){
var url = cljs.core.first(arglist__35958);
var content = cljs.core.rest(arglist__35958);
return link_to35957__delegate(url,content);
});
link_to35957.cljs$core$IFn$_invoke$arity$variadic = link_to35957__delegate;
return link_to35957;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to35957);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to35959 = (function() { 
var mail_to35959__delegate = function (e_mail,p__35960){var vec__35962 = p__35960;var content = cljs.core.nth.call(null,vec__35962,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to35959 = function (e_mail,var_args){
var p__35960 = null;if (arguments.length > 1) {
  p__35960 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to35959__delegate.call(this,e_mail,p__35960);};
mail_to35959.cljs$lang$maxFixedArity = 1;
mail_to35959.cljs$lang$applyTo = (function (arglist__35963){
var e_mail = cljs.core.first(arglist__35963);
var p__35960 = cljs.core.rest(arglist__35963);
return mail_to35959__delegate(e_mail,p__35960);
});
mail_to35959.cljs$core$IFn$_invoke$arity$variadic = mail_to35959__delegate;
return mail_to35959;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to35959);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list35964 = (function unordered_list35964(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__35969(s__35970){return (new cljs.core.LazySeq(null,(function (){var s__35970__$1 = s__35970;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35970__$1);if(temp__4092__auto__)
{var s__35970__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35970__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35970__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35972 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35971 = 0;while(true){
if((i__35971 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__35971);cljs.core.chunk_append.call(null,b__35972,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__35973 = (i__35971 + 1);
i__35971 = G__35973;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35972),iter__35969.call(null,cljs.core.chunk_rest.call(null,s__35970__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35972),null);
}
} else
{var x = cljs.core.first.call(null,s__35970__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__35969.call(null,cljs.core.rest.call(null,s__35970__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list35964);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list35974 = (function ordered_list35974(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__35979(s__35980){return (new cljs.core.LazySeq(null,(function (){var s__35980__$1 = s__35980;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35980__$1);if(temp__4092__auto__)
{var s__35980__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35980__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35980__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35982 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35981 = 0;while(true){
if((i__35981 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__35981);cljs.core.chunk_append.call(null,b__35982,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__35983 = (i__35981 + 1);
i__35981 = G__35983;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35982),iter__35979.call(null,cljs.core.chunk_rest.call(null,s__35980__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35982),null);
}
} else
{var x = cljs.core.first.call(null,s__35980__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__35979.call(null,cljs.core.rest.call(null,s__35980__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list35974);
/**
* Create an image element.
*/
sablono.core.image35984 = (function() {
var image35984 = null;
var image35984__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image35984__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image35984 = function(src,alt){
switch(arguments.length){
case 1:
return image35984__1.call(this,src);
case 2:
return image35984__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image35984.cljs$core$IFn$_invoke$arity$1 = image35984__1;
image35984.cljs$core$IFn$_invoke$arity$2 = image35984__2;
return image35984;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image35984);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__35985_SHARP_,p2__35986_SHARP_){return [cljs.core.str(p1__35985_SHARP_),cljs.core.str("["),cljs.core.str(p2__35986_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__35987_SHARP_,p2__35988_SHARP_){return [cljs.core.str(p1__35987_SHARP_),cljs.core.str("-"),cljs.core.str(p2__35988_SHARP_)].join('');
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
sablono.core.hidden_field35989 = (function() {
var hidden_field35989 = null;
var hidden_field35989__1 = (function (name){return hidden_field35989.call(null,name,null);
});
var hidden_field35989__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field35989 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field35989__1.call(this,name);
case 2:
return hidden_field35989__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field35989.cljs$core$IFn$_invoke$arity$1 = hidden_field35989__1;
hidden_field35989.cljs$core$IFn$_invoke$arity$2 = hidden_field35989__2;
return hidden_field35989;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field35989);
/**
* Creates a new text input field.
*/
sablono.core.text_field35990 = (function() {
var text_field35990 = null;
var text_field35990__1 = (function (name){return text_field35990.call(null,name,null);
});
var text_field35990__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field35990 = function(name,value){
switch(arguments.length){
case 1:
return text_field35990__1.call(this,name);
case 2:
return text_field35990__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field35990.cljs$core$IFn$_invoke$arity$1 = text_field35990__1;
text_field35990.cljs$core$IFn$_invoke$arity$2 = text_field35990__2;
return text_field35990;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field35990);
/**
* Creates a new password field.
*/
sablono.core.password_field35991 = (function() {
var password_field35991 = null;
var password_field35991__1 = (function (name){return password_field35991.call(null,name,null);
});
var password_field35991__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field35991 = function(name,value){
switch(arguments.length){
case 1:
return password_field35991__1.call(this,name);
case 2:
return password_field35991__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field35991.cljs$core$IFn$_invoke$arity$1 = password_field35991__1;
password_field35991.cljs$core$IFn$_invoke$arity$2 = password_field35991__2;
return password_field35991;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field35991);
/**
* Creates a new email input field.
*/
sablono.core.email_field35992 = (function() {
var email_field35992 = null;
var email_field35992__1 = (function (name){return email_field35992.call(null,name,null);
});
var email_field35992__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field35992 = function(name,value){
switch(arguments.length){
case 1:
return email_field35992__1.call(this,name);
case 2:
return email_field35992__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field35992.cljs$core$IFn$_invoke$arity$1 = email_field35992__1;
email_field35992.cljs$core$IFn$_invoke$arity$2 = email_field35992__2;
return email_field35992;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field35992);
/**
* Creates a check box.
*/
sablono.core.check_box35993 = (function() {
var check_box35993 = null;
var check_box35993__1 = (function (name){return check_box35993.call(null,name,null);
});
var check_box35993__2 = (function (name,checked_QMARK_){return check_box35993.call(null,name,checked_QMARK_,"true");
});
var check_box35993__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box35993 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box35993__1.call(this,name);
case 2:
return check_box35993__2.call(this,name,checked_QMARK_);
case 3:
return check_box35993__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box35993.cljs$core$IFn$_invoke$arity$1 = check_box35993__1;
check_box35993.cljs$core$IFn$_invoke$arity$2 = check_box35993__2;
check_box35993.cljs$core$IFn$_invoke$arity$3 = check_box35993__3;
return check_box35993;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box35993);
/**
* Creates a radio button.
*/
sablono.core.radio_button35994 = (function() {
var radio_button35994 = null;
var radio_button35994__1 = (function (group){return radio_button35994.call(null,group,null);
});
var radio_button35994__2 = (function (group,checked_QMARK_){return radio_button35994.call(null,group,checked_QMARK_,"true");
});
var radio_button35994__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button35994 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button35994__1.call(this,group);
case 2:
return radio_button35994__2.call(this,group,checked_QMARK_);
case 3:
return radio_button35994__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button35994.cljs$core$IFn$_invoke$arity$1 = radio_button35994__1;
radio_button35994.cljs$core$IFn$_invoke$arity$2 = radio_button35994__2;
radio_button35994.cljs$core$IFn$_invoke$arity$3 = radio_button35994__3;
return radio_button35994;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button35994);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options35995 = (function() {
var select_options35995 = null;
var select_options35995__1 = (function (coll){return select_options35995.call(null,coll,null);
});
var select_options35995__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__36004(s__36005){return (new cljs.core.LazySeq(null,(function (){var s__36005__$1 = s__36005;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36005__$1);if(temp__4092__auto__)
{var s__36005__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36005__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36005__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36007 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36006 = 0;while(true){
if((i__36006 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__36006);cljs.core.chunk_append.call(null,b__36007,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36010 = x;var text = cljs.core.nth.call(null,vec__36010,0,null);var val = cljs.core.nth.call(null,vec__36010,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options35995.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__36012 = (i__36006 + 1);
i__36006 = G__36012;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36007),iter__36004.call(null,cljs.core.chunk_rest.call(null,s__36005__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36007),null);
}
} else
{var x = cljs.core.first.call(null,s__36005__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36011 = x;var text = cljs.core.nth.call(null,vec__36011,0,null);var val = cljs.core.nth.call(null,vec__36011,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options35995.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__36004.call(null,cljs.core.rest.call(null,s__36005__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options35995 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options35995__1.call(this,coll);
case 2:
return select_options35995__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options35995.cljs$core$IFn$_invoke$arity$1 = select_options35995__1;
select_options35995.cljs$core$IFn$_invoke$arity$2 = select_options35995__2;
return select_options35995;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options35995);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down36013 = (function() {
var drop_down36013 = null;
var drop_down36013__2 = (function (name,options){return drop_down36013.call(null,name,options,null);
});
var drop_down36013__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down36013 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down36013__2.call(this,name,options);
case 3:
return drop_down36013__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down36013.cljs$core$IFn$_invoke$arity$2 = drop_down36013__2;
drop_down36013.cljs$core$IFn$_invoke$arity$3 = drop_down36013__3;
return drop_down36013;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down36013);
/**
* Creates a text area element.
*/
sablono.core.text_area36014 = (function() {
var text_area36014 = null;
var text_area36014__1 = (function (name){return text_area36014.call(null,name,null);
});
var text_area36014__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area36014 = function(name,value){
switch(arguments.length){
case 1:
return text_area36014__1.call(this,name);
case 2:
return text_area36014__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area36014.cljs$core$IFn$_invoke$arity$1 = text_area36014__1;
text_area36014.cljs$core$IFn$_invoke$arity$2 = text_area36014__2;
return text_area36014;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area36014);
/**
* Creates a file upload input.
*/
sablono.core.file_upload36015 = (function file_upload36015(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload36015);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label36016 = (function label36016(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label36016);
/**
* Creates a submit button.
*/
sablono.core.submit_button36017 = (function submit_button36017(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button36017);
/**
* Creates a form reset button.
*/
sablono.core.reset_button36018 = (function reset_button36018(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button36018);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to36019 = (function() { 
var form_to36019__delegate = function (p__36020,body){var vec__36022 = p__36020;var method = cljs.core.nth.call(null,vec__36022,0,null);var action = cljs.core.nth.call(null,vec__36022,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to36019 = function (p__36020,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to36019__delegate.call(this,p__36020,body);};
form_to36019.cljs$lang$maxFixedArity = 1;
form_to36019.cljs$lang$applyTo = (function (arglist__36023){
var p__36020 = cljs.core.first(arglist__36023);
var body = cljs.core.rest(arglist__36023);
return form_to36019__delegate(p__36020,body);
});
form_to36019.cljs$core$IFn$_invoke$arity$variadic = form_to36019__delegate;
return form_to36019;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to36019);
