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
var G__16957__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__16956 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__16956,0,null);var body = cljs.core.nthnext.call(null,vec__16956,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__16957 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__16957__delegate.call(this,args);};
G__16957.cljs$lang$maxFixedArity = 0;
G__16957.cljs$lang$applyTo = (function (arglist__16958){
var args = cljs.core.seq(arglist__16958);
return G__16957__delegate(args);
});
G__16957.cljs$core$IFn$_invoke$arity$variadic = G__16957__delegate;
return G__16957;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4158__auto__ = (function iter__16963(s__16964){return (new cljs.core.LazySeq(null,(function (){var s__16964__$1 = s__16964;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16964__$1);if(temp__4092__auto__)
{var s__16964__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16964__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__16964__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__16966 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__16965 = 0;while(true){
if((i__16965 < size__4157__auto__))
{var args = cljs.core._nth.call(null,c__4156__auto__,i__16965);cljs.core.chunk_append.call(null,b__16966,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__16967 = (i__16965 + 1);
i__16965 = G__16967;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16966),iter__16963.call(null,cljs.core.chunk_rest.call(null,s__16964__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16966),null);
}
} else
{var args = cljs.core.first.call(null,s__16964__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__16963.call(null,cljs.core.rest.call(null,s__16964__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__16968_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__16968_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4158__auto__ = (function iter__16973(s__16974){return (new cljs.core.LazySeq(null,(function (){var s__16974__$1 = s__16974;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16974__$1);if(temp__4092__auto__)
{var s__16974__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16974__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__16974__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__16976 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__16975 = 0;while(true){
if((i__16975 < size__4157__auto__))
{var style = cljs.core._nth.call(null,c__4156__auto__,i__16975);cljs.core.chunk_append.call(null,b__16976,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__16977 = (i__16975 + 1);
i__16975 = G__16977;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16976),iter__16973.call(null,cljs.core.chunk_rest.call(null,s__16974__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16976),null);
}
} else
{var style = cljs.core.first.call(null,s__16974__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__16973.call(null,cljs.core.rest.call(null,s__16974__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__16978){
var styles = cljs.core.seq(arglist__16978);
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
sablono.core.link_to16979 = (function() { 
var link_to16979__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to16979 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to16979__delegate.call(this,url,content);};
link_to16979.cljs$lang$maxFixedArity = 1;
link_to16979.cljs$lang$applyTo = (function (arglist__16980){
var url = cljs.core.first(arglist__16980);
var content = cljs.core.rest(arglist__16980);
return link_to16979__delegate(url,content);
});
link_to16979.cljs$core$IFn$_invoke$arity$variadic = link_to16979__delegate;
return link_to16979;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to16979);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to16981 = (function() { 
var mail_to16981__delegate = function (e_mail,p__16982){var vec__16984 = p__16982;var content = cljs.core.nth.call(null,vec__16984,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3441__auto__ = content;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to16981 = function (e_mail,var_args){
var p__16982 = null;if (arguments.length > 1) {
  p__16982 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to16981__delegate.call(this,e_mail,p__16982);};
mail_to16981.cljs$lang$maxFixedArity = 1;
mail_to16981.cljs$lang$applyTo = (function (arglist__16985){
var e_mail = cljs.core.first(arglist__16985);
var p__16982 = cljs.core.rest(arglist__16985);
return mail_to16981__delegate(e_mail,p__16982);
});
mail_to16981.cljs$core$IFn$_invoke$arity$variadic = mail_to16981__delegate;
return mail_to16981;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to16981);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list16986 = (function unordered_list16986(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4158__auto__ = (function iter__16991(s__16992){return (new cljs.core.LazySeq(null,(function (){var s__16992__$1 = s__16992;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16992__$1);if(temp__4092__auto__)
{var s__16992__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16992__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__16992__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__16994 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__16993 = 0;while(true){
if((i__16993 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__16993);cljs.core.chunk_append.call(null,b__16994,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16995 = (i__16993 + 1);
i__16993 = G__16995;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16994),iter__16991.call(null,cljs.core.chunk_rest.call(null,s__16992__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16994),null);
}
} else
{var x = cljs.core.first.call(null,s__16992__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16991.call(null,cljs.core.rest.call(null,s__16992__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list16986);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list16996 = (function ordered_list16996(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4158__auto__ = (function iter__17001(s__17002){return (new cljs.core.LazySeq(null,(function (){var s__17002__$1 = s__17002;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17002__$1);if(temp__4092__auto__)
{var s__17002__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17002__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17002__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17004 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17003 = 0;while(true){
if((i__17003 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__17003);cljs.core.chunk_append.call(null,b__17004,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17005 = (i__17003 + 1);
i__17003 = G__17005;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17004),iter__17001.call(null,cljs.core.chunk_rest.call(null,s__17002__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17004),null);
}
} else
{var x = cljs.core.first.call(null,s__17002__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17001.call(null,cljs.core.rest.call(null,s__17002__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list16996);
/**
* Create an image element.
*/
sablono.core.image17006 = (function() {
var image17006 = null;
var image17006__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image17006__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image17006 = function(src,alt){
switch(arguments.length){
case 1:
return image17006__1.call(this,src);
case 2:
return image17006__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image17006.cljs$core$IFn$_invoke$arity$1 = image17006__1;
image17006.cljs$core$IFn$_invoke$arity$2 = image17006__2;
return image17006;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17006);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__17007_SHARP_,p2__17008_SHARP_){return [cljs.core.str(p1__17007_SHARP_),cljs.core.str("["),cljs.core.str(p2__17008_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__17009_SHARP_,p2__17010_SHARP_){return [cljs.core.str(p1__17009_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17010_SHARP_)].join('');
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
sablono.core.hidden_field17011 = (function() {
var hidden_field17011 = null;
var hidden_field17011__1 = (function (name){return hidden_field17011.call(null,name,null);
});
var hidden_field17011__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field17011 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field17011__1.call(this,name);
case 2:
return hidden_field17011__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field17011.cljs$core$IFn$_invoke$arity$1 = hidden_field17011__1;
hidden_field17011.cljs$core$IFn$_invoke$arity$2 = hidden_field17011__2;
return hidden_field17011;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17011);
/**
* Creates a new text input field.
*/
sablono.core.text_field17012 = (function() {
var text_field17012 = null;
var text_field17012__1 = (function (name){return text_field17012.call(null,name,null);
});
var text_field17012__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field17012 = function(name,value){
switch(arguments.length){
case 1:
return text_field17012__1.call(this,name);
case 2:
return text_field17012__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field17012.cljs$core$IFn$_invoke$arity$1 = text_field17012__1;
text_field17012.cljs$core$IFn$_invoke$arity$2 = text_field17012__2;
return text_field17012;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17012);
/**
* Creates a new password field.
*/
sablono.core.password_field17013 = (function() {
var password_field17013 = null;
var password_field17013__1 = (function (name){return password_field17013.call(null,name,null);
});
var password_field17013__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field17013 = function(name,value){
switch(arguments.length){
case 1:
return password_field17013__1.call(this,name);
case 2:
return password_field17013__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field17013.cljs$core$IFn$_invoke$arity$1 = password_field17013__1;
password_field17013.cljs$core$IFn$_invoke$arity$2 = password_field17013__2;
return password_field17013;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17013);
/**
* Creates a new email input field.
*/
sablono.core.email_field17014 = (function() {
var email_field17014 = null;
var email_field17014__1 = (function (name){return email_field17014.call(null,name,null);
});
var email_field17014__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field17014 = function(name,value){
switch(arguments.length){
case 1:
return email_field17014__1.call(this,name);
case 2:
return email_field17014__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field17014.cljs$core$IFn$_invoke$arity$1 = email_field17014__1;
email_field17014.cljs$core$IFn$_invoke$arity$2 = email_field17014__2;
return email_field17014;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17014);
/**
* Creates a check box.
*/
sablono.core.check_box17015 = (function() {
var check_box17015 = null;
var check_box17015__1 = (function (name){return check_box17015.call(null,name,null);
});
var check_box17015__2 = (function (name,checked_QMARK_){return check_box17015.call(null,name,checked_QMARK_,"true");
});
var check_box17015__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box17015 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box17015__1.call(this,name);
case 2:
return check_box17015__2.call(this,name,checked_QMARK_);
case 3:
return check_box17015__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box17015.cljs$core$IFn$_invoke$arity$1 = check_box17015__1;
check_box17015.cljs$core$IFn$_invoke$arity$2 = check_box17015__2;
check_box17015.cljs$core$IFn$_invoke$arity$3 = check_box17015__3;
return check_box17015;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17015);
/**
* Creates a radio button.
*/
sablono.core.radio_button17016 = (function() {
var radio_button17016 = null;
var radio_button17016__1 = (function (group){return radio_button17016.call(null,group,null);
});
var radio_button17016__2 = (function (group,checked_QMARK_){return radio_button17016.call(null,group,checked_QMARK_,"true");
});
var radio_button17016__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button17016 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button17016__1.call(this,group);
case 2:
return radio_button17016__2.call(this,group,checked_QMARK_);
case 3:
return radio_button17016__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button17016.cljs$core$IFn$_invoke$arity$1 = radio_button17016__1;
radio_button17016.cljs$core$IFn$_invoke$arity$2 = radio_button17016__2;
radio_button17016.cljs$core$IFn$_invoke$arity$3 = radio_button17016__3;
return radio_button17016;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17016);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options17017 = (function() {
var select_options17017 = null;
var select_options17017__1 = (function (coll){return select_options17017.call(null,coll,null);
});
var select_options17017__2 = (function (coll,selected){var iter__4158__auto__ = (function iter__17026(s__17027){return (new cljs.core.LazySeq(null,(function (){var s__17027__$1 = s__17027;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17027__$1);if(temp__4092__auto__)
{var s__17027__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17027__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17027__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17029 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17028 = 0;while(true){
if((i__17028 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__17028);cljs.core.chunk_append.call(null,b__17029,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17032 = x;var text = cljs.core.nth.call(null,vec__17032,0,null);var val = cljs.core.nth.call(null,vec__17032,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17017.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__17034 = (i__17028 + 1);
i__17028 = G__17034;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17029),iter__17026.call(null,cljs.core.chunk_rest.call(null,s__17027__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17029),null);
}
} else
{var x = cljs.core.first.call(null,s__17027__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17033 = x;var text = cljs.core.nth.call(null,vec__17033,0,null);var val = cljs.core.nth.call(null,vec__17033,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17017.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__17026.call(null,cljs.core.rest.call(null,s__17027__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
});
select_options17017 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options17017__1.call(this,coll);
case 2:
return select_options17017__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options17017.cljs$core$IFn$_invoke$arity$1 = select_options17017__1;
select_options17017.cljs$core$IFn$_invoke$arity$2 = select_options17017__2;
return select_options17017;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17017);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down17035 = (function() {
var drop_down17035 = null;
var drop_down17035__2 = (function (name,options){return drop_down17035.call(null,name,options,null);
});
var drop_down17035__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down17035 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down17035__2.call(this,name,options);
case 3:
return drop_down17035__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down17035.cljs$core$IFn$_invoke$arity$2 = drop_down17035__2;
drop_down17035.cljs$core$IFn$_invoke$arity$3 = drop_down17035__3;
return drop_down17035;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17035);
/**
* Creates a text area element.
*/
sablono.core.text_area17036 = (function() {
var text_area17036 = null;
var text_area17036__1 = (function (name){return text_area17036.call(null,name,null);
});
var text_area17036__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area17036 = function(name,value){
switch(arguments.length){
case 1:
return text_area17036__1.call(this,name);
case 2:
return text_area17036__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area17036.cljs$core$IFn$_invoke$arity$1 = text_area17036__1;
text_area17036.cljs$core$IFn$_invoke$arity$2 = text_area17036__2;
return text_area17036;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17036);
/**
* Creates a file upload input.
*/
sablono.core.file_upload17037 = (function file_upload17037(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload17037);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label17038 = (function label17038(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17038);
/**
* Creates a submit button.
*/
sablono.core.submit_button17039 = (function submit_button17039(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17039);
/**
* Creates a form reset button.
*/
sablono.core.reset_button17040 = (function reset_button17040(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17040);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to17041 = (function() { 
var form_to17041__delegate = function (p__17042,body){var vec__17044 = p__17042;var method = cljs.core.nth.call(null,vec__17044,0,null);var action = cljs.core.nth.call(null,vec__17044,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to17041 = function (p__17042,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to17041__delegate.call(this,p__17042,body);};
form_to17041.cljs$lang$maxFixedArity = 1;
form_to17041.cljs$lang$applyTo = (function (arglist__17045){
var p__17042 = cljs.core.first(arglist__17045);
var body = cljs.core.rest(arglist__17045);
return form_to17041__delegate(p__17042,body);
});
form_to17041.cljs$core$IFn$_invoke$arity$variadic = form_to17041__delegate;
return form_to17041;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17041);
