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
var G__27954__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__27953 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__27953,0,null);var body = cljs.core.nthnext.call(null,vec__27953,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__27954 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27954__delegate.call(this,args);};
G__27954.cljs$lang$maxFixedArity = 0;
G__27954.cljs$lang$applyTo = (function (arglist__27955){
var args = cljs.core.seq(arglist__27955);
return G__27954__delegate(args);
});
G__27954.cljs$core$IFn$_invoke$arity$variadic = G__27954__delegate;
return G__27954;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4158__auto__ = (function iter__27960(s__27961){return (new cljs.core.LazySeq(null,(function (){var s__27961__$1 = s__27961;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27961__$1);if(temp__4092__auto__)
{var s__27961__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27961__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__27961__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__27963 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__27962 = 0;while(true){
if((i__27962 < size__4157__auto__))
{var args = cljs.core._nth.call(null,c__4156__auto__,i__27962);cljs.core.chunk_append.call(null,b__27963,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__27964 = (i__27962 + 1);
i__27962 = G__27964;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27963),iter__27960.call(null,cljs.core.chunk_rest.call(null,s__27961__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27963),null);
}
} else
{var args = cljs.core.first.call(null,s__27961__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__27960.call(null,cljs.core.rest.call(null,s__27961__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__27965_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__27965_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4158__auto__ = (function iter__27970(s__27971){return (new cljs.core.LazySeq(null,(function (){var s__27971__$1 = s__27971;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27971__$1);if(temp__4092__auto__)
{var s__27971__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27971__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__27971__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__27973 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__27972 = 0;while(true){
if((i__27972 < size__4157__auto__))
{var style = cljs.core._nth.call(null,c__4156__auto__,i__27972);cljs.core.chunk_append.call(null,b__27973,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__27974 = (i__27972 + 1);
i__27972 = G__27974;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27973),iter__27970.call(null,cljs.core.chunk_rest.call(null,s__27971__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27973),null);
}
} else
{var style = cljs.core.first.call(null,s__27971__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__27970.call(null,cljs.core.rest.call(null,s__27971__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__27975){
var styles = cljs.core.seq(arglist__27975);
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
sablono.core.link_to27976 = (function() { 
var link_to27976__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to27976 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to27976__delegate.call(this,url,content);};
link_to27976.cljs$lang$maxFixedArity = 1;
link_to27976.cljs$lang$applyTo = (function (arglist__27977){
var url = cljs.core.first(arglist__27977);
var content = cljs.core.rest(arglist__27977);
return link_to27976__delegate(url,content);
});
link_to27976.cljs$core$IFn$_invoke$arity$variadic = link_to27976__delegate;
return link_to27976;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to27976);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to27978 = (function() { 
var mail_to27978__delegate = function (e_mail,p__27979){var vec__27981 = p__27979;var content = cljs.core.nth.call(null,vec__27981,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3441__auto__ = content;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to27978 = function (e_mail,var_args){
var p__27979 = null;if (arguments.length > 1) {
  p__27979 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to27978__delegate.call(this,e_mail,p__27979);};
mail_to27978.cljs$lang$maxFixedArity = 1;
mail_to27978.cljs$lang$applyTo = (function (arglist__27982){
var e_mail = cljs.core.first(arglist__27982);
var p__27979 = cljs.core.rest(arglist__27982);
return mail_to27978__delegate(e_mail,p__27979);
});
mail_to27978.cljs$core$IFn$_invoke$arity$variadic = mail_to27978__delegate;
return mail_to27978;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to27978);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list27983 = (function unordered_list27983(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4158__auto__ = (function iter__27988(s__27989){return (new cljs.core.LazySeq(null,(function (){var s__27989__$1 = s__27989;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27989__$1);if(temp__4092__auto__)
{var s__27989__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27989__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__27989__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__27991 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__27990 = 0;while(true){
if((i__27990 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__27990);cljs.core.chunk_append.call(null,b__27991,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__27992 = (i__27990 + 1);
i__27990 = G__27992;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27991),iter__27988.call(null,cljs.core.chunk_rest.call(null,s__27989__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27991),null);
}
} else
{var x = cljs.core.first.call(null,s__27989__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__27988.call(null,cljs.core.rest.call(null,s__27989__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list27983);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list27993 = (function ordered_list27993(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4158__auto__ = (function iter__27998(s__27999){return (new cljs.core.LazySeq(null,(function (){var s__27999__$1 = s__27999;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27999__$1);if(temp__4092__auto__)
{var s__27999__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27999__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__27999__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__28001 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__28000 = 0;while(true){
if((i__28000 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__28000);cljs.core.chunk_append.call(null,b__28001,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__28002 = (i__28000 + 1);
i__28000 = G__28002;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28001),iter__27998.call(null,cljs.core.chunk_rest.call(null,s__27999__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28001),null);
}
} else
{var x = cljs.core.first.call(null,s__27999__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__27998.call(null,cljs.core.rest.call(null,s__27999__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list27993);
/**
* Create an image element.
*/
sablono.core.image28003 = (function() {
var image28003 = null;
var image28003__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image28003__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image28003 = function(src,alt){
switch(arguments.length){
case 1:
return image28003__1.call(this,src);
case 2:
return image28003__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image28003.cljs$core$IFn$_invoke$arity$1 = image28003__1;
image28003.cljs$core$IFn$_invoke$arity$2 = image28003__2;
return image28003;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image28003);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__28004_SHARP_,p2__28005_SHARP_){return [cljs.core.str(p1__28004_SHARP_),cljs.core.str("["),cljs.core.str(p2__28005_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__28006_SHARP_,p2__28007_SHARP_){return [cljs.core.str(p1__28006_SHARP_),cljs.core.str("-"),cljs.core.str(p2__28007_SHARP_)].join('');
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
sablono.core.hidden_field28008 = (function() {
var hidden_field28008 = null;
var hidden_field28008__1 = (function (name){return hidden_field28008.call(null,name,null);
});
var hidden_field28008__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field28008 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field28008__1.call(this,name);
case 2:
return hidden_field28008__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field28008.cljs$core$IFn$_invoke$arity$1 = hidden_field28008__1;
hidden_field28008.cljs$core$IFn$_invoke$arity$2 = hidden_field28008__2;
return hidden_field28008;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field28008);
/**
* Creates a new text input field.
*/
sablono.core.text_field28009 = (function() {
var text_field28009 = null;
var text_field28009__1 = (function (name){return text_field28009.call(null,name,null);
});
var text_field28009__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field28009 = function(name,value){
switch(arguments.length){
case 1:
return text_field28009__1.call(this,name);
case 2:
return text_field28009__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field28009.cljs$core$IFn$_invoke$arity$1 = text_field28009__1;
text_field28009.cljs$core$IFn$_invoke$arity$2 = text_field28009__2;
return text_field28009;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28009);
/**
* Creates a new password field.
*/
sablono.core.password_field28010 = (function() {
var password_field28010 = null;
var password_field28010__1 = (function (name){return password_field28010.call(null,name,null);
});
var password_field28010__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field28010 = function(name,value){
switch(arguments.length){
case 1:
return password_field28010__1.call(this,name);
case 2:
return password_field28010__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field28010.cljs$core$IFn$_invoke$arity$1 = password_field28010__1;
password_field28010.cljs$core$IFn$_invoke$arity$2 = password_field28010__2;
return password_field28010;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field28010);
/**
* Creates a new email input field.
*/
sablono.core.email_field28011 = (function() {
var email_field28011 = null;
var email_field28011__1 = (function (name){return email_field28011.call(null,name,null);
});
var email_field28011__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field28011 = function(name,value){
switch(arguments.length){
case 1:
return email_field28011__1.call(this,name);
case 2:
return email_field28011__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field28011.cljs$core$IFn$_invoke$arity$1 = email_field28011__1;
email_field28011.cljs$core$IFn$_invoke$arity$2 = email_field28011__2;
return email_field28011;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field28011);
/**
* Creates a check box.
*/
sablono.core.check_box28012 = (function() {
var check_box28012 = null;
var check_box28012__1 = (function (name){return check_box28012.call(null,name,null);
});
var check_box28012__2 = (function (name,checked_QMARK_){return check_box28012.call(null,name,checked_QMARK_,"true");
});
var check_box28012__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box28012 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box28012__1.call(this,name);
case 2:
return check_box28012__2.call(this,name,checked_QMARK_);
case 3:
return check_box28012__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box28012.cljs$core$IFn$_invoke$arity$1 = check_box28012__1;
check_box28012.cljs$core$IFn$_invoke$arity$2 = check_box28012__2;
check_box28012.cljs$core$IFn$_invoke$arity$3 = check_box28012__3;
return check_box28012;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box28012);
/**
* Creates a radio button.
*/
sablono.core.radio_button28013 = (function() {
var radio_button28013 = null;
var radio_button28013__1 = (function (group){return radio_button28013.call(null,group,null);
});
var radio_button28013__2 = (function (group,checked_QMARK_){return radio_button28013.call(null,group,checked_QMARK_,"true");
});
var radio_button28013__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button28013 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button28013__1.call(this,group);
case 2:
return radio_button28013__2.call(this,group,checked_QMARK_);
case 3:
return radio_button28013__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button28013.cljs$core$IFn$_invoke$arity$1 = radio_button28013__1;
radio_button28013.cljs$core$IFn$_invoke$arity$2 = radio_button28013__2;
radio_button28013.cljs$core$IFn$_invoke$arity$3 = radio_button28013__3;
return radio_button28013;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button28013);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options28014 = (function() {
var select_options28014 = null;
var select_options28014__1 = (function (coll){return select_options28014.call(null,coll,null);
});
var select_options28014__2 = (function (coll,selected){var iter__4158__auto__ = (function iter__28023(s__28024){return (new cljs.core.LazySeq(null,(function (){var s__28024__$1 = s__28024;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28024__$1);if(temp__4092__auto__)
{var s__28024__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28024__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__28024__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__28026 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__28025 = 0;while(true){
if((i__28025 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__28025);cljs.core.chunk_append.call(null,b__28026,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28029 = x;var text = cljs.core.nth.call(null,vec__28029,0,null);var val = cljs.core.nth.call(null,vec__28029,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options28014.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__28031 = (i__28025 + 1);
i__28025 = G__28031;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28026),iter__28023.call(null,cljs.core.chunk_rest.call(null,s__28024__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28026),null);
}
} else
{var x = cljs.core.first.call(null,s__28024__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28030 = x;var text = cljs.core.nth.call(null,vec__28030,0,null);var val = cljs.core.nth.call(null,vec__28030,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options28014.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__28023.call(null,cljs.core.rest.call(null,s__28024__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
});
select_options28014 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options28014__1.call(this,coll);
case 2:
return select_options28014__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options28014.cljs$core$IFn$_invoke$arity$1 = select_options28014__1;
select_options28014.cljs$core$IFn$_invoke$arity$2 = select_options28014__2;
return select_options28014;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options28014);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down28032 = (function() {
var drop_down28032 = null;
var drop_down28032__2 = (function (name,options){return drop_down28032.call(null,name,options,null);
});
var drop_down28032__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down28032 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down28032__2.call(this,name,options);
case 3:
return drop_down28032__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down28032.cljs$core$IFn$_invoke$arity$2 = drop_down28032__2;
drop_down28032.cljs$core$IFn$_invoke$arity$3 = drop_down28032__3;
return drop_down28032;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down28032);
/**
* Creates a text area element.
*/
sablono.core.text_area28033 = (function() {
var text_area28033 = null;
var text_area28033__1 = (function (name){return text_area28033.call(null,name,null);
});
var text_area28033__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area28033 = function(name,value){
switch(arguments.length){
case 1:
return text_area28033__1.call(this,name);
case 2:
return text_area28033__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area28033.cljs$core$IFn$_invoke$arity$1 = text_area28033__1;
text_area28033.cljs$core$IFn$_invoke$arity$2 = text_area28033__2;
return text_area28033;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area28033);
/**
* Creates a file upload input.
*/
sablono.core.file_upload28034 = (function file_upload28034(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload28034);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label28035 = (function label28035(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label28035);
/**
* Creates a submit button.
*/
sablono.core.submit_button28036 = (function submit_button28036(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button28036);
/**
* Creates a form reset button.
*/
sablono.core.reset_button28037 = (function reset_button28037(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button28037);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to28038 = (function() { 
var form_to28038__delegate = function (p__28039,body){var vec__28041 = p__28039;var method = cljs.core.nth.call(null,vec__28041,0,null);var action = cljs.core.nth.call(null,vec__28041,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to28038 = function (p__28039,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to28038__delegate.call(this,p__28039,body);};
form_to28038.cljs$lang$maxFixedArity = 1;
form_to28038.cljs$lang$applyTo = (function (arglist__28042){
var p__28039 = cljs.core.first(arglist__28042);
var body = cljs.core.rest(arglist__28042);
return form_to28038__delegate(p__28039,body);
});
form_to28038.cljs$core$IFn$_invoke$arity$variadic = form_to28038__delegate;
return form_to28038;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to28038);

//# sourceMappingURL=core.js.map