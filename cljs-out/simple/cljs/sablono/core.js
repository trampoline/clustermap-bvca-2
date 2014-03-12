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
var G__17037__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__17036 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__17036,0,null);var body = cljs.core.nthnext.call(null,vec__17036,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__17037 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17037__delegate.call(this,args);};
G__17037.cljs$lang$maxFixedArity = 0;
G__17037.cljs$lang$applyTo = (function (arglist__17038){
var args = cljs.core.seq(arglist__17038);
return G__17037__delegate(args);
});
G__17037.cljs$core$IFn$_invoke$arity$variadic = G__17037__delegate;
return G__17037;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4158__auto__ = (function iter__17043(s__17044){return (new cljs.core.LazySeq(null,(function (){var s__17044__$1 = s__17044;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17044__$1);if(temp__4092__auto__)
{var s__17044__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17044__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17044__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17046 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17045 = 0;while(true){
if((i__17045 < size__4157__auto__))
{var args = cljs.core._nth.call(null,c__4156__auto__,i__17045);cljs.core.chunk_append.call(null,b__17046,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__17047 = (i__17045 + 1);
i__17045 = G__17047;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17046),iter__17043.call(null,cljs.core.chunk_rest.call(null,s__17044__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17046),null);
}
} else
{var args = cljs.core.first.call(null,s__17044__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__17043.call(null,cljs.core.rest.call(null,s__17044__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__17048_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__17048_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4158__auto__ = (function iter__17053(s__17054){return (new cljs.core.LazySeq(null,(function (){var s__17054__$1 = s__17054;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17054__$1);if(temp__4092__auto__)
{var s__17054__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17054__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17054__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17056 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17055 = 0;while(true){
if((i__17055 < size__4157__auto__))
{var style = cljs.core._nth.call(null,c__4156__auto__,i__17055);cljs.core.chunk_append.call(null,b__17056,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__17057 = (i__17055 + 1);
i__17055 = G__17057;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17056),iter__17053.call(null,cljs.core.chunk_rest.call(null,s__17054__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17056),null);
}
} else
{var style = cljs.core.first.call(null,s__17054__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__17053.call(null,cljs.core.rest.call(null,s__17054__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__17058){
var styles = cljs.core.seq(arglist__17058);
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
sablono.core.link_to17059 = (function() { 
var link_to17059__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to17059 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to17059__delegate.call(this,url,content);};
link_to17059.cljs$lang$maxFixedArity = 1;
link_to17059.cljs$lang$applyTo = (function (arglist__17060){
var url = cljs.core.first(arglist__17060);
var content = cljs.core.rest(arglist__17060);
return link_to17059__delegate(url,content);
});
link_to17059.cljs$core$IFn$_invoke$arity$variadic = link_to17059__delegate;
return link_to17059;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17059);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to17061 = (function() { 
var mail_to17061__delegate = function (e_mail,p__17062){var vec__17064 = p__17062;var content = cljs.core.nth.call(null,vec__17064,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3441__auto__ = content;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to17061 = function (e_mail,var_args){
var p__17062 = null;if (arguments.length > 1) {
  p__17062 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to17061__delegate.call(this,e_mail,p__17062);};
mail_to17061.cljs$lang$maxFixedArity = 1;
mail_to17061.cljs$lang$applyTo = (function (arglist__17065){
var e_mail = cljs.core.first(arglist__17065);
var p__17062 = cljs.core.rest(arglist__17065);
return mail_to17061__delegate(e_mail,p__17062);
});
mail_to17061.cljs$core$IFn$_invoke$arity$variadic = mail_to17061__delegate;
return mail_to17061;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17061);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list17066 = (function unordered_list17066(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4158__auto__ = (function iter__17071(s__17072){return (new cljs.core.LazySeq(null,(function (){var s__17072__$1 = s__17072;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17072__$1);if(temp__4092__auto__)
{var s__17072__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17072__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17072__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17074 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17073 = 0;while(true){
if((i__17073 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__17073);cljs.core.chunk_append.call(null,b__17074,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17075 = (i__17073 + 1);
i__17073 = G__17075;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17074),iter__17071.call(null,cljs.core.chunk_rest.call(null,s__17072__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17074),null);
}
} else
{var x = cljs.core.first.call(null,s__17072__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17071.call(null,cljs.core.rest.call(null,s__17072__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17066);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list17076 = (function ordered_list17076(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4158__auto__ = (function iter__17081(s__17082){return (new cljs.core.LazySeq(null,(function (){var s__17082__$1 = s__17082;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17082__$1);if(temp__4092__auto__)
{var s__17082__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17082__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17082__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17084 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17083 = 0;while(true){
if((i__17083 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__17083);cljs.core.chunk_append.call(null,b__17084,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17085 = (i__17083 + 1);
i__17083 = G__17085;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17084),iter__17081.call(null,cljs.core.chunk_rest.call(null,s__17082__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17084),null);
}
} else
{var x = cljs.core.first.call(null,s__17082__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17081.call(null,cljs.core.rest.call(null,s__17082__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17076);
/**
* Create an image element.
*/
sablono.core.image17086 = (function() {
var image17086 = null;
var image17086__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image17086__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image17086 = function(src,alt){
switch(arguments.length){
case 1:
return image17086__1.call(this,src);
case 2:
return image17086__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image17086.cljs$core$IFn$_invoke$arity$1 = image17086__1;
image17086.cljs$core$IFn$_invoke$arity$2 = image17086__2;
return image17086;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17086);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__17087_SHARP_,p2__17088_SHARP_){return [cljs.core.str(p1__17087_SHARP_),cljs.core.str("["),cljs.core.str(p2__17088_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__17089_SHARP_,p2__17090_SHARP_){return [cljs.core.str(p1__17089_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17090_SHARP_)].join('');
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
sablono.core.hidden_field17091 = (function() {
var hidden_field17091 = null;
var hidden_field17091__1 = (function (name){return hidden_field17091.call(null,name,null);
});
var hidden_field17091__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field17091 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field17091__1.call(this,name);
case 2:
return hidden_field17091__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field17091.cljs$core$IFn$_invoke$arity$1 = hidden_field17091__1;
hidden_field17091.cljs$core$IFn$_invoke$arity$2 = hidden_field17091__2;
return hidden_field17091;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17091);
/**
* Creates a new text input field.
*/
sablono.core.text_field17092 = (function() {
var text_field17092 = null;
var text_field17092__1 = (function (name){return text_field17092.call(null,name,null);
});
var text_field17092__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field17092 = function(name,value){
switch(arguments.length){
case 1:
return text_field17092__1.call(this,name);
case 2:
return text_field17092__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field17092.cljs$core$IFn$_invoke$arity$1 = text_field17092__1;
text_field17092.cljs$core$IFn$_invoke$arity$2 = text_field17092__2;
return text_field17092;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17092);
/**
* Creates a new password field.
*/
sablono.core.password_field17093 = (function() {
var password_field17093 = null;
var password_field17093__1 = (function (name){return password_field17093.call(null,name,null);
});
var password_field17093__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field17093 = function(name,value){
switch(arguments.length){
case 1:
return password_field17093__1.call(this,name);
case 2:
return password_field17093__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field17093.cljs$core$IFn$_invoke$arity$1 = password_field17093__1;
password_field17093.cljs$core$IFn$_invoke$arity$2 = password_field17093__2;
return password_field17093;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17093);
/**
* Creates a new email input field.
*/
sablono.core.email_field17094 = (function() {
var email_field17094 = null;
var email_field17094__1 = (function (name){return email_field17094.call(null,name,null);
});
var email_field17094__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field17094 = function(name,value){
switch(arguments.length){
case 1:
return email_field17094__1.call(this,name);
case 2:
return email_field17094__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field17094.cljs$core$IFn$_invoke$arity$1 = email_field17094__1;
email_field17094.cljs$core$IFn$_invoke$arity$2 = email_field17094__2;
return email_field17094;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17094);
/**
* Creates a check box.
*/
sablono.core.check_box17095 = (function() {
var check_box17095 = null;
var check_box17095__1 = (function (name){return check_box17095.call(null,name,null);
});
var check_box17095__2 = (function (name,checked_QMARK_){return check_box17095.call(null,name,checked_QMARK_,"true");
});
var check_box17095__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box17095 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box17095__1.call(this,name);
case 2:
return check_box17095__2.call(this,name,checked_QMARK_);
case 3:
return check_box17095__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box17095.cljs$core$IFn$_invoke$arity$1 = check_box17095__1;
check_box17095.cljs$core$IFn$_invoke$arity$2 = check_box17095__2;
check_box17095.cljs$core$IFn$_invoke$arity$3 = check_box17095__3;
return check_box17095;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17095);
/**
* Creates a radio button.
*/
sablono.core.radio_button17096 = (function() {
var radio_button17096 = null;
var radio_button17096__1 = (function (group){return radio_button17096.call(null,group,null);
});
var radio_button17096__2 = (function (group,checked_QMARK_){return radio_button17096.call(null,group,checked_QMARK_,"true");
});
var radio_button17096__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button17096 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button17096__1.call(this,group);
case 2:
return radio_button17096__2.call(this,group,checked_QMARK_);
case 3:
return radio_button17096__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button17096.cljs$core$IFn$_invoke$arity$1 = radio_button17096__1;
radio_button17096.cljs$core$IFn$_invoke$arity$2 = radio_button17096__2;
radio_button17096.cljs$core$IFn$_invoke$arity$3 = radio_button17096__3;
return radio_button17096;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17096);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options17097 = (function() {
var select_options17097 = null;
var select_options17097__1 = (function (coll){return select_options17097.call(null,coll,null);
});
var select_options17097__2 = (function (coll,selected){var iter__4158__auto__ = (function iter__17106(s__17107){return (new cljs.core.LazySeq(null,(function (){var s__17107__$1 = s__17107;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17107__$1);if(temp__4092__auto__)
{var s__17107__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17107__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17107__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17109 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17108 = 0;while(true){
if((i__17108 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__17108);cljs.core.chunk_append.call(null,b__17109,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17112 = x;var text = cljs.core.nth.call(null,vec__17112,0,null);var val = cljs.core.nth.call(null,vec__17112,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17097.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__17114 = (i__17108 + 1);
i__17108 = G__17114;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17109),iter__17106.call(null,cljs.core.chunk_rest.call(null,s__17107__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17109),null);
}
} else
{var x = cljs.core.first.call(null,s__17107__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17113 = x;var text = cljs.core.nth.call(null,vec__17113,0,null);var val = cljs.core.nth.call(null,vec__17113,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17097.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__17106.call(null,cljs.core.rest.call(null,s__17107__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
});
select_options17097 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options17097__1.call(this,coll);
case 2:
return select_options17097__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options17097.cljs$core$IFn$_invoke$arity$1 = select_options17097__1;
select_options17097.cljs$core$IFn$_invoke$arity$2 = select_options17097__2;
return select_options17097;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17097);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down17115 = (function() {
var drop_down17115 = null;
var drop_down17115__2 = (function (name,options){return drop_down17115.call(null,name,options,null);
});
var drop_down17115__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down17115 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down17115__2.call(this,name,options);
case 3:
return drop_down17115__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down17115.cljs$core$IFn$_invoke$arity$2 = drop_down17115__2;
drop_down17115.cljs$core$IFn$_invoke$arity$3 = drop_down17115__3;
return drop_down17115;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17115);
/**
* Creates a text area element.
*/
sablono.core.text_area17116 = (function() {
var text_area17116 = null;
var text_area17116__1 = (function (name){return text_area17116.call(null,name,null);
});
var text_area17116__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area17116 = function(name,value){
switch(arguments.length){
case 1:
return text_area17116__1.call(this,name);
case 2:
return text_area17116__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area17116.cljs$core$IFn$_invoke$arity$1 = text_area17116__1;
text_area17116.cljs$core$IFn$_invoke$arity$2 = text_area17116__2;
return text_area17116;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17116);
/**
* Creates a file upload input.
*/
sablono.core.file_upload17117 = (function file_upload17117(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload17117);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label17118 = (function label17118(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17118);
/**
* Creates a submit button.
*/
sablono.core.submit_button17119 = (function submit_button17119(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17119);
/**
* Creates a form reset button.
*/
sablono.core.reset_button17120 = (function reset_button17120(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17120);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to17121 = (function() { 
var form_to17121__delegate = function (p__17122,body){var vec__17124 = p__17122;var method = cljs.core.nth.call(null,vec__17124,0,null);var action = cljs.core.nth.call(null,vec__17124,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to17121 = function (p__17122,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to17121__delegate.call(this,p__17122,body);};
form_to17121.cljs$lang$maxFixedArity = 1;
form_to17121.cljs$lang$applyTo = (function (arglist__17125){
var p__17122 = cljs.core.first(arglist__17125);
var body = cljs.core.rest(arglist__17125);
return form_to17121__delegate(p__17122,body);
});
form_to17121.cljs$core$IFn$_invoke$arity$variadic = form_to17121__delegate;
return form_to17121;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17121);
