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
var G__26863__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__26862 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__26862,0,null);var body = cljs.core.nthnext.call(null,vec__26862,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__26863 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26863__delegate.call(this,args);};
G__26863.cljs$lang$maxFixedArity = 0;
G__26863.cljs$lang$applyTo = (function (arglist__26864){
var args = cljs.core.seq(arglist__26864);
return G__26863__delegate(args);
});
G__26863.cljs$core$IFn$_invoke$arity$variadic = G__26863__delegate;
return G__26863;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__26869(s__26870){return (new cljs.core.LazySeq(null,(function (){var s__26870__$1 = s__26870;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__26870__$1);if(temp__4092__auto__)
{var s__26870__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26870__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__26870__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__26872 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__26871 = 0;while(true){
if((i__26871 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__26871);cljs.core.chunk_append.call(null,b__26872,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__26873 = (i__26871 + 1);
i__26871 = G__26873;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26872),iter__26869.call(null,cljs.core.chunk_rest.call(null,s__26870__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26872),null);
}
} else
{var args = cljs.core.first.call(null,s__26870__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__26869.call(null,cljs.core.rest.call(null,s__26870__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__26874_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__26874_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__26879(s__26880){return (new cljs.core.LazySeq(null,(function (){var s__26880__$1 = s__26880;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__26880__$1);if(temp__4092__auto__)
{var s__26880__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26880__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__26880__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__26882 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__26881 = 0;while(true){
if((i__26881 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__26881);cljs.core.chunk_append.call(null,b__26882,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__26883 = (i__26881 + 1);
i__26881 = G__26883;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26882),iter__26879.call(null,cljs.core.chunk_rest.call(null,s__26880__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26882),null);
}
} else
{var style = cljs.core.first.call(null,s__26880__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__26879.call(null,cljs.core.rest.call(null,s__26880__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__26884){
var styles = cljs.core.seq(arglist__26884);
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
sablono.core.link_to26885 = (function() { 
var link_to26885__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to26885 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to26885__delegate.call(this,url,content);};
link_to26885.cljs$lang$maxFixedArity = 1;
link_to26885.cljs$lang$applyTo = (function (arglist__26886){
var url = cljs.core.first(arglist__26886);
var content = cljs.core.rest(arglist__26886);
return link_to26885__delegate(url,content);
});
link_to26885.cljs$core$IFn$_invoke$arity$variadic = link_to26885__delegate;
return link_to26885;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26885);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26887 = (function() { 
var mail_to26887__delegate = function (e_mail,p__26888){var vec__26890 = p__26888;var content = cljs.core.nth.call(null,vec__26890,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to26887 = function (e_mail,var_args){
var p__26888 = null;if (arguments.length > 1) {
  p__26888 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to26887__delegate.call(this,e_mail,p__26888);};
mail_to26887.cljs$lang$maxFixedArity = 1;
mail_to26887.cljs$lang$applyTo = (function (arglist__26891){
var e_mail = cljs.core.first(arglist__26891);
var p__26888 = cljs.core.rest(arglist__26891);
return mail_to26887__delegate(e_mail,p__26888);
});
mail_to26887.cljs$core$IFn$_invoke$arity$variadic = mail_to26887__delegate;
return mail_to26887;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26887);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26892 = (function unordered_list26892(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__26897(s__26898){return (new cljs.core.LazySeq(null,(function (){var s__26898__$1 = s__26898;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__26898__$1);if(temp__4092__auto__)
{var s__26898__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26898__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__26898__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__26900 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__26899 = 0;while(true){
if((i__26899 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__26899);cljs.core.chunk_append.call(null,b__26900,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__26901 = (i__26899 + 1);
i__26899 = G__26901;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26900),iter__26897.call(null,cljs.core.chunk_rest.call(null,s__26898__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26900),null);
}
} else
{var x = cljs.core.first.call(null,s__26898__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__26897.call(null,cljs.core.rest.call(null,s__26898__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26892);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26902 = (function ordered_list26902(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__26907(s__26908){return (new cljs.core.LazySeq(null,(function (){var s__26908__$1 = s__26908;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__26908__$1);if(temp__4092__auto__)
{var s__26908__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26908__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__26908__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__26910 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__26909 = 0;while(true){
if((i__26909 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__26909);cljs.core.chunk_append.call(null,b__26910,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__26911 = (i__26909 + 1);
i__26909 = G__26911;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26910),iter__26907.call(null,cljs.core.chunk_rest.call(null,s__26908__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26910),null);
}
} else
{var x = cljs.core.first.call(null,s__26908__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__26907.call(null,cljs.core.rest.call(null,s__26908__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26902);
/**
* Create an image element.
*/
sablono.core.image26912 = (function() {
var image26912 = null;
var image26912__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image26912__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image26912 = function(src,alt){
switch(arguments.length){
case 1:
return image26912__1.call(this,src);
case 2:
return image26912__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26912.cljs$core$IFn$_invoke$arity$1 = image26912__1;
image26912.cljs$core$IFn$_invoke$arity$2 = image26912__2;
return image26912;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26912);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__26913_SHARP_,p2__26914_SHARP_){return [cljs.core.str(p1__26913_SHARP_),cljs.core.str("["),cljs.core.str(p2__26914_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__26915_SHARP_,p2__26916_SHARP_){return [cljs.core.str(p1__26915_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26916_SHARP_)].join('');
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
sablono.core.hidden_field26917 = (function() {
var hidden_field26917 = null;
var hidden_field26917__1 = (function (name){return hidden_field26917.call(null,name,null);
});
var hidden_field26917__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field26917 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field26917__1.call(this,name);
case 2:
return hidden_field26917__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26917.cljs$core$IFn$_invoke$arity$1 = hidden_field26917__1;
hidden_field26917.cljs$core$IFn$_invoke$arity$2 = hidden_field26917__2;
return hidden_field26917;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26917);
/**
* Creates a new text input field.
*/
sablono.core.text_field26918 = (function() {
var text_field26918 = null;
var text_field26918__1 = (function (name){return text_field26918.call(null,name,null);
});
var text_field26918__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field26918 = function(name,value){
switch(arguments.length){
case 1:
return text_field26918__1.call(this,name);
case 2:
return text_field26918__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26918.cljs$core$IFn$_invoke$arity$1 = text_field26918__1;
text_field26918.cljs$core$IFn$_invoke$arity$2 = text_field26918__2;
return text_field26918;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26918);
/**
* Creates a new password field.
*/
sablono.core.password_field26919 = (function() {
var password_field26919 = null;
var password_field26919__1 = (function (name){return password_field26919.call(null,name,null);
});
var password_field26919__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field26919 = function(name,value){
switch(arguments.length){
case 1:
return password_field26919__1.call(this,name);
case 2:
return password_field26919__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26919.cljs$core$IFn$_invoke$arity$1 = password_field26919__1;
password_field26919.cljs$core$IFn$_invoke$arity$2 = password_field26919__2;
return password_field26919;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26919);
/**
* Creates a new email input field.
*/
sablono.core.email_field26920 = (function() {
var email_field26920 = null;
var email_field26920__1 = (function (name){return email_field26920.call(null,name,null);
});
var email_field26920__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field26920 = function(name,value){
switch(arguments.length){
case 1:
return email_field26920__1.call(this,name);
case 2:
return email_field26920__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26920.cljs$core$IFn$_invoke$arity$1 = email_field26920__1;
email_field26920.cljs$core$IFn$_invoke$arity$2 = email_field26920__2;
return email_field26920;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26920);
/**
* Creates a check box.
*/
sablono.core.check_box26921 = (function() {
var check_box26921 = null;
var check_box26921__1 = (function (name){return check_box26921.call(null,name,null);
});
var check_box26921__2 = (function (name,checked_QMARK_){return check_box26921.call(null,name,checked_QMARK_,"true");
});
var check_box26921__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box26921 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26921__1.call(this,name);
case 2:
return check_box26921__2.call(this,name,checked_QMARK_);
case 3:
return check_box26921__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26921.cljs$core$IFn$_invoke$arity$1 = check_box26921__1;
check_box26921.cljs$core$IFn$_invoke$arity$2 = check_box26921__2;
check_box26921.cljs$core$IFn$_invoke$arity$3 = check_box26921__3;
return check_box26921;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26921);
/**
* Creates a radio button.
*/
sablono.core.radio_button26922 = (function() {
var radio_button26922 = null;
var radio_button26922__1 = (function (group){return radio_button26922.call(null,group,null);
});
var radio_button26922__2 = (function (group,checked_QMARK_){return radio_button26922.call(null,group,checked_QMARK_,"true");
});
var radio_button26922__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button26922 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26922__1.call(this,group);
case 2:
return radio_button26922__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26922__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26922.cljs$core$IFn$_invoke$arity$1 = radio_button26922__1;
radio_button26922.cljs$core$IFn$_invoke$arity$2 = radio_button26922__2;
radio_button26922.cljs$core$IFn$_invoke$arity$3 = radio_button26922__3;
return radio_button26922;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26922);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26923 = (function() {
var select_options26923 = null;
var select_options26923__1 = (function (coll){return select_options26923.call(null,coll,null);
});
var select_options26923__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__26932(s__26933){return (new cljs.core.LazySeq(null,(function (){var s__26933__$1 = s__26933;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__26933__$1);if(temp__4092__auto__)
{var s__26933__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26933__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__26933__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__26935 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__26934 = 0;while(true){
if((i__26934 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__26934);cljs.core.chunk_append.call(null,b__26935,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26938 = x;var text = cljs.core.nth.call(null,vec__26938,0,null);var val = cljs.core.nth.call(null,vec__26938,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options26923.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__26940 = (i__26934 + 1);
i__26934 = G__26940;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26935),iter__26932.call(null,cljs.core.chunk_rest.call(null,s__26933__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26935),null);
}
} else
{var x = cljs.core.first.call(null,s__26933__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26939 = x;var text = cljs.core.nth.call(null,vec__26939,0,null);var val = cljs.core.nth.call(null,vec__26939,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options26923.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__26932.call(null,cljs.core.rest.call(null,s__26933__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options26923 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26923__1.call(this,coll);
case 2:
return select_options26923__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26923.cljs$core$IFn$_invoke$arity$1 = select_options26923__1;
select_options26923.cljs$core$IFn$_invoke$arity$2 = select_options26923__2;
return select_options26923;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26923);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26941 = (function() {
var drop_down26941 = null;
var drop_down26941__2 = (function (name,options){return drop_down26941.call(null,name,options,null);
});
var drop_down26941__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down26941 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26941__2.call(this,name,options);
case 3:
return drop_down26941__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26941.cljs$core$IFn$_invoke$arity$2 = drop_down26941__2;
drop_down26941.cljs$core$IFn$_invoke$arity$3 = drop_down26941__3;
return drop_down26941;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26941);
/**
* Creates a text area element.
*/
sablono.core.text_area26942 = (function() {
var text_area26942 = null;
var text_area26942__1 = (function (name){return text_area26942.call(null,name,null);
});
var text_area26942__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area26942 = function(name,value){
switch(arguments.length){
case 1:
return text_area26942__1.call(this,name);
case 2:
return text_area26942__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26942.cljs$core$IFn$_invoke$arity$1 = text_area26942__1;
text_area26942.cljs$core$IFn$_invoke$arity$2 = text_area26942__2;
return text_area26942;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26942);
/**
* Creates a file upload input.
*/
sablono.core.file_upload26943 = (function file_upload26943(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload26943);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26944 = (function label26944(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26944);
/**
* Creates a submit button.
*/
sablono.core.submit_button26945 = (function submit_button26945(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26945);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26946 = (function reset_button26946(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26946);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26947 = (function() { 
var form_to26947__delegate = function (p__26948,body){var vec__26950 = p__26948;var method = cljs.core.nth.call(null,vec__26950,0,null);var action = cljs.core.nth.call(null,vec__26950,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to26947 = function (p__26948,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to26947__delegate.call(this,p__26948,body);};
form_to26947.cljs$lang$maxFixedArity = 1;
form_to26947.cljs$lang$applyTo = (function (arglist__26951){
var p__26948 = cljs.core.first(arglist__26951);
var body = cljs.core.rest(arglist__26951);
return form_to26947__delegate(p__26948,body);
});
form_to26947.cljs$core$IFn$_invoke$arity$variadic = form_to26947__delegate;
return form_to26947;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26947);
