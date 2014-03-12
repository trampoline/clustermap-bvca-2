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
var G__49908__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__49907 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__49907,0,null);var body = cljs.core.nthnext.call(null,vec__49907,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__49908 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__49908__delegate.call(this,args);};
G__49908.cljs$lang$maxFixedArity = 0;
G__49908.cljs$lang$applyTo = (function (arglist__49909){
var args = cljs.core.seq(arglist__49909);
return G__49908__delegate(args);
});
G__49908.cljs$core$IFn$_invoke$arity$variadic = G__49908__delegate;
return G__49908;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4158__auto__ = (function iter__49914(s__49915){return (new cljs.core.LazySeq(null,(function (){var s__49915__$1 = s__49915;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__49915__$1);if(temp__4092__auto__)
{var s__49915__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49915__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__49915__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__49917 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__49916 = 0;while(true){
if((i__49916 < size__4157__auto__))
{var args = cljs.core._nth.call(null,c__4156__auto__,i__49916);cljs.core.chunk_append.call(null,b__49917,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__49918 = (i__49916 + 1);
i__49916 = G__49918;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49917),iter__49914.call(null,cljs.core.chunk_rest.call(null,s__49915__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49917),null);
}
} else
{var args = cljs.core.first.call(null,s__49915__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__49914.call(null,cljs.core.rest.call(null,s__49915__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__49919_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__49919_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4158__auto__ = (function iter__49924(s__49925){return (new cljs.core.LazySeq(null,(function (){var s__49925__$1 = s__49925;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__49925__$1);if(temp__4092__auto__)
{var s__49925__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49925__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__49925__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__49927 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__49926 = 0;while(true){
if((i__49926 < size__4157__auto__))
{var style = cljs.core._nth.call(null,c__4156__auto__,i__49926);cljs.core.chunk_append.call(null,b__49927,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__49928 = (i__49926 + 1);
i__49926 = G__49928;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49927),iter__49924.call(null,cljs.core.chunk_rest.call(null,s__49925__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49927),null);
}
} else
{var style = cljs.core.first.call(null,s__49925__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__49924.call(null,cljs.core.rest.call(null,s__49925__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__49929){
var styles = cljs.core.seq(arglist__49929);
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
sablono.core.link_to49930 = (function() { 
var link_to49930__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to49930 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to49930__delegate.call(this,url,content);};
link_to49930.cljs$lang$maxFixedArity = 1;
link_to49930.cljs$lang$applyTo = (function (arglist__49931){
var url = cljs.core.first(arglist__49931);
var content = cljs.core.rest(arglist__49931);
return link_to49930__delegate(url,content);
});
link_to49930.cljs$core$IFn$_invoke$arity$variadic = link_to49930__delegate;
return link_to49930;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to49930);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to49932 = (function() { 
var mail_to49932__delegate = function (e_mail,p__49933){var vec__49935 = p__49933;var content = cljs.core.nth.call(null,vec__49935,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3441__auto__ = content;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to49932 = function (e_mail,var_args){
var p__49933 = null;if (arguments.length > 1) {
  p__49933 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to49932__delegate.call(this,e_mail,p__49933);};
mail_to49932.cljs$lang$maxFixedArity = 1;
mail_to49932.cljs$lang$applyTo = (function (arglist__49936){
var e_mail = cljs.core.first(arglist__49936);
var p__49933 = cljs.core.rest(arglist__49936);
return mail_to49932__delegate(e_mail,p__49933);
});
mail_to49932.cljs$core$IFn$_invoke$arity$variadic = mail_to49932__delegate;
return mail_to49932;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to49932);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list49937 = (function unordered_list49937(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4158__auto__ = (function iter__49942(s__49943){return (new cljs.core.LazySeq(null,(function (){var s__49943__$1 = s__49943;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__49943__$1);if(temp__4092__auto__)
{var s__49943__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49943__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__49943__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__49945 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__49944 = 0;while(true){
if((i__49944 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__49944);cljs.core.chunk_append.call(null,b__49945,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__49946 = (i__49944 + 1);
i__49944 = G__49946;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49945),iter__49942.call(null,cljs.core.chunk_rest.call(null,s__49943__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49945),null);
}
} else
{var x = cljs.core.first.call(null,s__49943__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__49942.call(null,cljs.core.rest.call(null,s__49943__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list49937);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list49947 = (function ordered_list49947(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4158__auto__ = (function iter__49952(s__49953){return (new cljs.core.LazySeq(null,(function (){var s__49953__$1 = s__49953;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__49953__$1);if(temp__4092__auto__)
{var s__49953__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49953__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__49953__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__49955 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__49954 = 0;while(true){
if((i__49954 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__49954);cljs.core.chunk_append.call(null,b__49955,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__49956 = (i__49954 + 1);
i__49954 = G__49956;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49955),iter__49952.call(null,cljs.core.chunk_rest.call(null,s__49953__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49955),null);
}
} else
{var x = cljs.core.first.call(null,s__49953__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__49952.call(null,cljs.core.rest.call(null,s__49953__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list49947);
/**
* Create an image element.
*/
sablono.core.image49957 = (function() {
var image49957 = null;
var image49957__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image49957__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image49957 = function(src,alt){
switch(arguments.length){
case 1:
return image49957__1.call(this,src);
case 2:
return image49957__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image49957.cljs$core$IFn$_invoke$arity$1 = image49957__1;
image49957.cljs$core$IFn$_invoke$arity$2 = image49957__2;
return image49957;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image49957);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__49958_SHARP_,p2__49959_SHARP_){return [cljs.core.str(p1__49958_SHARP_),cljs.core.str("["),cljs.core.str(p2__49959_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__49960_SHARP_,p2__49961_SHARP_){return [cljs.core.str(p1__49960_SHARP_),cljs.core.str("-"),cljs.core.str(p2__49961_SHARP_)].join('');
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
sablono.core.hidden_field49962 = (function() {
var hidden_field49962 = null;
var hidden_field49962__1 = (function (name){return hidden_field49962.call(null,name,null);
});
var hidden_field49962__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field49962 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field49962__1.call(this,name);
case 2:
return hidden_field49962__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field49962.cljs$core$IFn$_invoke$arity$1 = hidden_field49962__1;
hidden_field49962.cljs$core$IFn$_invoke$arity$2 = hidden_field49962__2;
return hidden_field49962;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field49962);
/**
* Creates a new text input field.
*/
sablono.core.text_field49963 = (function() {
var text_field49963 = null;
var text_field49963__1 = (function (name){return text_field49963.call(null,name,null);
});
var text_field49963__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field49963 = function(name,value){
switch(arguments.length){
case 1:
return text_field49963__1.call(this,name);
case 2:
return text_field49963__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field49963.cljs$core$IFn$_invoke$arity$1 = text_field49963__1;
text_field49963.cljs$core$IFn$_invoke$arity$2 = text_field49963__2;
return text_field49963;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field49963);
/**
* Creates a new password field.
*/
sablono.core.password_field49964 = (function() {
var password_field49964 = null;
var password_field49964__1 = (function (name){return password_field49964.call(null,name,null);
});
var password_field49964__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field49964 = function(name,value){
switch(arguments.length){
case 1:
return password_field49964__1.call(this,name);
case 2:
return password_field49964__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field49964.cljs$core$IFn$_invoke$arity$1 = password_field49964__1;
password_field49964.cljs$core$IFn$_invoke$arity$2 = password_field49964__2;
return password_field49964;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field49964);
/**
* Creates a new email input field.
*/
sablono.core.email_field49965 = (function() {
var email_field49965 = null;
var email_field49965__1 = (function (name){return email_field49965.call(null,name,null);
});
var email_field49965__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field49965 = function(name,value){
switch(arguments.length){
case 1:
return email_field49965__1.call(this,name);
case 2:
return email_field49965__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field49965.cljs$core$IFn$_invoke$arity$1 = email_field49965__1;
email_field49965.cljs$core$IFn$_invoke$arity$2 = email_field49965__2;
return email_field49965;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field49965);
/**
* Creates a check box.
*/
sablono.core.check_box49966 = (function() {
var check_box49966 = null;
var check_box49966__1 = (function (name){return check_box49966.call(null,name,null);
});
var check_box49966__2 = (function (name,checked_QMARK_){return check_box49966.call(null,name,checked_QMARK_,"true");
});
var check_box49966__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box49966 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box49966__1.call(this,name);
case 2:
return check_box49966__2.call(this,name,checked_QMARK_);
case 3:
return check_box49966__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box49966.cljs$core$IFn$_invoke$arity$1 = check_box49966__1;
check_box49966.cljs$core$IFn$_invoke$arity$2 = check_box49966__2;
check_box49966.cljs$core$IFn$_invoke$arity$3 = check_box49966__3;
return check_box49966;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box49966);
/**
* Creates a radio button.
*/
sablono.core.radio_button49967 = (function() {
var radio_button49967 = null;
var radio_button49967__1 = (function (group){return radio_button49967.call(null,group,null);
});
var radio_button49967__2 = (function (group,checked_QMARK_){return radio_button49967.call(null,group,checked_QMARK_,"true");
});
var radio_button49967__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button49967 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button49967__1.call(this,group);
case 2:
return radio_button49967__2.call(this,group,checked_QMARK_);
case 3:
return radio_button49967__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button49967.cljs$core$IFn$_invoke$arity$1 = radio_button49967__1;
radio_button49967.cljs$core$IFn$_invoke$arity$2 = radio_button49967__2;
radio_button49967.cljs$core$IFn$_invoke$arity$3 = radio_button49967__3;
return radio_button49967;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button49967);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options49968 = (function() {
var select_options49968 = null;
var select_options49968__1 = (function (coll){return select_options49968.call(null,coll,null);
});
var select_options49968__2 = (function (coll,selected){var iter__4158__auto__ = (function iter__49977(s__49978){return (new cljs.core.LazySeq(null,(function (){var s__49978__$1 = s__49978;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__49978__$1);if(temp__4092__auto__)
{var s__49978__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49978__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__49978__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__49980 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__49979 = 0;while(true){
if((i__49979 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__49979);cljs.core.chunk_append.call(null,b__49980,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__49983 = x;var text = cljs.core.nth.call(null,vec__49983,0,null);var val = cljs.core.nth.call(null,vec__49983,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options49968.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__49985 = (i__49979 + 1);
i__49979 = G__49985;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49980),iter__49977.call(null,cljs.core.chunk_rest.call(null,s__49978__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49980),null);
}
} else
{var x = cljs.core.first.call(null,s__49978__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__49984 = x;var text = cljs.core.nth.call(null,vec__49984,0,null);var val = cljs.core.nth.call(null,vec__49984,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options49968.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__49977.call(null,cljs.core.rest.call(null,s__49978__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
});
select_options49968 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options49968__1.call(this,coll);
case 2:
return select_options49968__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options49968.cljs$core$IFn$_invoke$arity$1 = select_options49968__1;
select_options49968.cljs$core$IFn$_invoke$arity$2 = select_options49968__2;
return select_options49968;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options49968);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down49986 = (function() {
var drop_down49986 = null;
var drop_down49986__2 = (function (name,options){return drop_down49986.call(null,name,options,null);
});
var drop_down49986__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down49986 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down49986__2.call(this,name,options);
case 3:
return drop_down49986__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down49986.cljs$core$IFn$_invoke$arity$2 = drop_down49986__2;
drop_down49986.cljs$core$IFn$_invoke$arity$3 = drop_down49986__3;
return drop_down49986;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down49986);
/**
* Creates a text area element.
*/
sablono.core.text_area49987 = (function() {
var text_area49987 = null;
var text_area49987__1 = (function (name){return text_area49987.call(null,name,null);
});
var text_area49987__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area49987 = function(name,value){
switch(arguments.length){
case 1:
return text_area49987__1.call(this,name);
case 2:
return text_area49987__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area49987.cljs$core$IFn$_invoke$arity$1 = text_area49987__1;
text_area49987.cljs$core$IFn$_invoke$arity$2 = text_area49987__2;
return text_area49987;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area49987);
/**
* Creates a file upload input.
*/
sablono.core.file_upload49988 = (function file_upload49988(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload49988);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label49989 = (function label49989(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label49989);
/**
* Creates a submit button.
*/
sablono.core.submit_button49990 = (function submit_button49990(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button49990);
/**
* Creates a form reset button.
*/
sablono.core.reset_button49991 = (function reset_button49991(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button49991);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to49992 = (function() { 
var form_to49992__delegate = function (p__49993,body){var vec__49995 = p__49993;var method = cljs.core.nth.call(null,vec__49995,0,null);var action = cljs.core.nth.call(null,vec__49995,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to49992 = function (p__49993,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to49992__delegate.call(this,p__49993,body);};
form_to49992.cljs$lang$maxFixedArity = 1;
form_to49992.cljs$lang$applyTo = (function (arglist__49996){
var p__49993 = cljs.core.first(arglist__49996);
var body = cljs.core.rest(arglist__49996);
return form_to49992__delegate(p__49993,body);
});
form_to49992.cljs$core$IFn$_invoke$arity$variadic = form_to49992__delegate;
return form_to49992;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to49992);
