// Compiled by ClojureScript 0.0-2322
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
var G__31173__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__31172 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__31172,(0),null);var body = cljs.core.nthnext.call(null,vec__31172,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__31173 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31173__delegate.call(this,args);};
G__31173.cljs$lang$maxFixedArity = 0;
G__31173.cljs$lang$applyTo = (function (arglist__31174){
var args = cljs.core.seq(arglist__31174);
return G__31173__delegate(args);
});
G__31173.cljs$core$IFn$_invoke$arity$variadic = G__31173__delegate;
return G__31173;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__31179(s__31180){return (new cljs.core.LazySeq(null,(function (){var s__31180__$1 = s__31180;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31180__$1);if(temp__4126__auto__)
{var s__31180__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31180__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__31180__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__31182 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__31181 = (0);while(true){
if((i__31181 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__31181);cljs.core.chunk_append.call(null,b__31182,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__31183 = (i__31181 + (1));
i__31181 = G__31183;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31182),iter__31179.call(null,cljs.core.chunk_rest.call(null,s__31180__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31182),null);
}
} else
{var args = cljs.core.first.call(null,s__31180__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__31179.call(null,cljs.core.rest.call(null,s__31180__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__31188(s__31189){return (new cljs.core.LazySeq(null,(function (){var s__31189__$1 = s__31189;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31189__$1);if(temp__4126__auto__)
{var s__31189__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31189__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__31189__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__31191 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__31190 = (0);while(true){
if((i__31190 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__31190);cljs.core.chunk_append.call(null,b__31191,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__31192 = (i__31190 + (1));
i__31190 = G__31192;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31191),iter__31188.call(null,cljs.core.chunk_rest.call(null,s__31189__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31191),null);
}
} else
{var style = cljs.core.first.call(null,s__31189__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__31188.call(null,cljs.core.rest.call(null,s__31189__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__31193){
var styles = cljs.core.seq(arglist__31193);
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
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to31194 = (function() { 
var link_to31194__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to31194 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to31194__delegate.call(this,url,content);};
link_to31194.cljs$lang$maxFixedArity = 1;
link_to31194.cljs$lang$applyTo = (function (arglist__31195){
var url = cljs.core.first(arglist__31195);
var content = cljs.core.rest(arglist__31195);
return link_to31194__delegate(url,content);
});
link_to31194.cljs$core$IFn$_invoke$arity$variadic = link_to31194__delegate;
return link_to31194;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to31194);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to31196 = (function() { 
var mail_to31196__delegate = function (e_mail,p__31197){var vec__31199 = p__31197;var content = cljs.core.nth.call(null,vec__31199,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to31196 = function (e_mail,var_args){
var p__31197 = null;if (arguments.length > 1) {
  p__31197 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to31196__delegate.call(this,e_mail,p__31197);};
mail_to31196.cljs$lang$maxFixedArity = 1;
mail_to31196.cljs$lang$applyTo = (function (arglist__31200){
var e_mail = cljs.core.first(arglist__31200);
var p__31197 = cljs.core.rest(arglist__31200);
return mail_to31196__delegate(e_mail,p__31197);
});
mail_to31196.cljs$core$IFn$_invoke$arity$variadic = mail_to31196__delegate;
return mail_to31196;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to31196);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list31201 = (function unordered_list31201(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__31206(s__31207){return (new cljs.core.LazySeq(null,(function (){var s__31207__$1 = s__31207;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31207__$1);if(temp__4126__auto__)
{var s__31207__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31207__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__31207__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__31209 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__31208 = (0);while(true){
if((i__31208 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__31208);cljs.core.chunk_append.call(null,b__31209,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__31210 = (i__31208 + (1));
i__31208 = G__31210;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31209),iter__31206.call(null,cljs.core.chunk_rest.call(null,s__31207__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31209),null);
}
} else
{var x = cljs.core.first.call(null,s__31207__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__31206.call(null,cljs.core.rest.call(null,s__31207__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list31201);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list31211 = (function ordered_list31211(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__31216(s__31217){return (new cljs.core.LazySeq(null,(function (){var s__31217__$1 = s__31217;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31217__$1);if(temp__4126__auto__)
{var s__31217__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31217__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__31217__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__31219 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__31218 = (0);while(true){
if((i__31218 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__31218);cljs.core.chunk_append.call(null,b__31219,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__31220 = (i__31218 + (1));
i__31218 = G__31220;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31219),iter__31216.call(null,cljs.core.chunk_rest.call(null,s__31217__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31219),null);
}
} else
{var x = cljs.core.first.call(null,s__31217__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__31216.call(null,cljs.core.rest.call(null,s__31217__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list31211);
/**
* Create an image element.
*/
sablono.core.image31221 = (function() {
var image31221 = null;
var image31221__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image31221__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image31221 = function(src,alt){
switch(arguments.length){
case 1:
return image31221__1.call(this,src);
case 2:
return image31221__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image31221.cljs$core$IFn$_invoke$arity$1 = image31221__1;
image31221.cljs$core$IFn$_invoke$arity$2 = image31221__2;
return image31221;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image31221);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__31222_SHARP_,p2__31223_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31222_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__31223_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__31224_SHARP_,p2__31225_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31224_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__31225_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field31226 = (function() {
var color_field31226 = null;
var color_field31226__1 = (function (name__10286__auto__){return color_field31226.call(null,name__10286__auto__,null);
});
var color_field31226__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10286__auto__,value__10287__auto__);
});
color_field31226 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return color_field31226__1.call(this,name__10286__auto__);
case 2:
return color_field31226__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field31226.cljs$core$IFn$_invoke$arity$1 = color_field31226__1;
color_field31226.cljs$core$IFn$_invoke$arity$2 = color_field31226__2;
return color_field31226;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field31226);
/**
* Creates a date input field.
*/
sablono.core.date_field31227 = (function() {
var date_field31227 = null;
var date_field31227__1 = (function (name__10286__auto__){return date_field31227.call(null,name__10286__auto__,null);
});
var date_field31227__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10286__auto__,value__10287__auto__);
});
date_field31227 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return date_field31227__1.call(this,name__10286__auto__);
case 2:
return date_field31227__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field31227.cljs$core$IFn$_invoke$arity$1 = date_field31227__1;
date_field31227.cljs$core$IFn$_invoke$arity$2 = date_field31227__2;
return date_field31227;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field31227);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field31228 = (function() {
var datetime_field31228 = null;
var datetime_field31228__1 = (function (name__10286__auto__){return datetime_field31228.call(null,name__10286__auto__,null);
});
var datetime_field31228__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10286__auto__,value__10287__auto__);
});
datetime_field31228 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return datetime_field31228__1.call(this,name__10286__auto__);
case 2:
return datetime_field31228__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field31228.cljs$core$IFn$_invoke$arity$1 = datetime_field31228__1;
datetime_field31228.cljs$core$IFn$_invoke$arity$2 = datetime_field31228__2;
return datetime_field31228;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field31228);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field31229 = (function() {
var datetime_local_field31229 = null;
var datetime_local_field31229__1 = (function (name__10286__auto__){return datetime_local_field31229.call(null,name__10286__auto__,null);
});
var datetime_local_field31229__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10286__auto__,value__10287__auto__);
});
datetime_local_field31229 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return datetime_local_field31229__1.call(this,name__10286__auto__);
case 2:
return datetime_local_field31229__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field31229.cljs$core$IFn$_invoke$arity$1 = datetime_local_field31229__1;
datetime_local_field31229.cljs$core$IFn$_invoke$arity$2 = datetime_local_field31229__2;
return datetime_local_field31229;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field31229);
/**
* Creates a email input field.
*/
sablono.core.email_field31230 = (function() {
var email_field31230 = null;
var email_field31230__1 = (function (name__10286__auto__){return email_field31230.call(null,name__10286__auto__,null);
});
var email_field31230__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10286__auto__,value__10287__auto__);
});
email_field31230 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return email_field31230__1.call(this,name__10286__auto__);
case 2:
return email_field31230__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field31230.cljs$core$IFn$_invoke$arity$1 = email_field31230__1;
email_field31230.cljs$core$IFn$_invoke$arity$2 = email_field31230__2;
return email_field31230;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field31230);
/**
* Creates a file input field.
*/
sablono.core.file_field31231 = (function() {
var file_field31231 = null;
var file_field31231__1 = (function (name__10286__auto__){return file_field31231.call(null,name__10286__auto__,null);
});
var file_field31231__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10286__auto__,value__10287__auto__);
});
file_field31231 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return file_field31231__1.call(this,name__10286__auto__);
case 2:
return file_field31231__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field31231.cljs$core$IFn$_invoke$arity$1 = file_field31231__1;
file_field31231.cljs$core$IFn$_invoke$arity$2 = file_field31231__2;
return file_field31231;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field31231);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field31232 = (function() {
var hidden_field31232 = null;
var hidden_field31232__1 = (function (name__10286__auto__){return hidden_field31232.call(null,name__10286__auto__,null);
});
var hidden_field31232__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10286__auto__,value__10287__auto__);
});
hidden_field31232 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return hidden_field31232__1.call(this,name__10286__auto__);
case 2:
return hidden_field31232__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field31232.cljs$core$IFn$_invoke$arity$1 = hidden_field31232__1;
hidden_field31232.cljs$core$IFn$_invoke$arity$2 = hidden_field31232__2;
return hidden_field31232;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field31232);
/**
* Creates a month input field.
*/
sablono.core.month_field31233 = (function() {
var month_field31233 = null;
var month_field31233__1 = (function (name__10286__auto__){return month_field31233.call(null,name__10286__auto__,null);
});
var month_field31233__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10286__auto__,value__10287__auto__);
});
month_field31233 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return month_field31233__1.call(this,name__10286__auto__);
case 2:
return month_field31233__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field31233.cljs$core$IFn$_invoke$arity$1 = month_field31233__1;
month_field31233.cljs$core$IFn$_invoke$arity$2 = month_field31233__2;
return month_field31233;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field31233);
/**
* Creates a number input field.
*/
sablono.core.number_field31234 = (function() {
var number_field31234 = null;
var number_field31234__1 = (function (name__10286__auto__){return number_field31234.call(null,name__10286__auto__,null);
});
var number_field31234__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10286__auto__,value__10287__auto__);
});
number_field31234 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return number_field31234__1.call(this,name__10286__auto__);
case 2:
return number_field31234__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field31234.cljs$core$IFn$_invoke$arity$1 = number_field31234__1;
number_field31234.cljs$core$IFn$_invoke$arity$2 = number_field31234__2;
return number_field31234;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field31234);
/**
* Creates a password input field.
*/
sablono.core.password_field31235 = (function() {
var password_field31235 = null;
var password_field31235__1 = (function (name__10286__auto__){return password_field31235.call(null,name__10286__auto__,null);
});
var password_field31235__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10286__auto__,value__10287__auto__);
});
password_field31235 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return password_field31235__1.call(this,name__10286__auto__);
case 2:
return password_field31235__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field31235.cljs$core$IFn$_invoke$arity$1 = password_field31235__1;
password_field31235.cljs$core$IFn$_invoke$arity$2 = password_field31235__2;
return password_field31235;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field31235);
/**
* Creates a range input field.
*/
sablono.core.range_field31236 = (function() {
var range_field31236 = null;
var range_field31236__1 = (function (name__10286__auto__){return range_field31236.call(null,name__10286__auto__,null);
});
var range_field31236__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10286__auto__,value__10287__auto__);
});
range_field31236 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return range_field31236__1.call(this,name__10286__auto__);
case 2:
return range_field31236__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field31236.cljs$core$IFn$_invoke$arity$1 = range_field31236__1;
range_field31236.cljs$core$IFn$_invoke$arity$2 = range_field31236__2;
return range_field31236;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field31236);
/**
* Creates a search input field.
*/
sablono.core.search_field31237 = (function() {
var search_field31237 = null;
var search_field31237__1 = (function (name__10286__auto__){return search_field31237.call(null,name__10286__auto__,null);
});
var search_field31237__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10286__auto__,value__10287__auto__);
});
search_field31237 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return search_field31237__1.call(this,name__10286__auto__);
case 2:
return search_field31237__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field31237.cljs$core$IFn$_invoke$arity$1 = search_field31237__1;
search_field31237.cljs$core$IFn$_invoke$arity$2 = search_field31237__2;
return search_field31237;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field31237);
/**
* Creates a tel input field.
*/
sablono.core.tel_field31238 = (function() {
var tel_field31238 = null;
var tel_field31238__1 = (function (name__10286__auto__){return tel_field31238.call(null,name__10286__auto__,null);
});
var tel_field31238__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10286__auto__,value__10287__auto__);
});
tel_field31238 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return tel_field31238__1.call(this,name__10286__auto__);
case 2:
return tel_field31238__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field31238.cljs$core$IFn$_invoke$arity$1 = tel_field31238__1;
tel_field31238.cljs$core$IFn$_invoke$arity$2 = tel_field31238__2;
return tel_field31238;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field31238);
/**
* Creates a text input field.
*/
sablono.core.text_field31239 = (function() {
var text_field31239 = null;
var text_field31239__1 = (function (name__10286__auto__){return text_field31239.call(null,name__10286__auto__,null);
});
var text_field31239__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10286__auto__,value__10287__auto__);
});
text_field31239 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return text_field31239__1.call(this,name__10286__auto__);
case 2:
return text_field31239__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field31239.cljs$core$IFn$_invoke$arity$1 = text_field31239__1;
text_field31239.cljs$core$IFn$_invoke$arity$2 = text_field31239__2;
return text_field31239;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field31239);
/**
* Creates a time input field.
*/
sablono.core.time_field31240 = (function() {
var time_field31240 = null;
var time_field31240__1 = (function (name__10286__auto__){return time_field31240.call(null,name__10286__auto__,null);
});
var time_field31240__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10286__auto__,value__10287__auto__);
});
time_field31240 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return time_field31240__1.call(this,name__10286__auto__);
case 2:
return time_field31240__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field31240.cljs$core$IFn$_invoke$arity$1 = time_field31240__1;
time_field31240.cljs$core$IFn$_invoke$arity$2 = time_field31240__2;
return time_field31240;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field31240);
/**
* Creates a url input field.
*/
sablono.core.url_field31241 = (function() {
var url_field31241 = null;
var url_field31241__1 = (function (name__10286__auto__){return url_field31241.call(null,name__10286__auto__,null);
});
var url_field31241__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10286__auto__,value__10287__auto__);
});
url_field31241 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return url_field31241__1.call(this,name__10286__auto__);
case 2:
return url_field31241__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field31241.cljs$core$IFn$_invoke$arity$1 = url_field31241__1;
url_field31241.cljs$core$IFn$_invoke$arity$2 = url_field31241__2;
return url_field31241;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field31241);
/**
* Creates a week input field.
*/
sablono.core.week_field31242 = (function() {
var week_field31242 = null;
var week_field31242__1 = (function (name__10286__auto__){return week_field31242.call(null,name__10286__auto__,null);
});
var week_field31242__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10286__auto__,value__10287__auto__);
});
week_field31242 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return week_field31242__1.call(this,name__10286__auto__);
case 2:
return week_field31242__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field31242.cljs$core$IFn$_invoke$arity$1 = week_field31242__1;
week_field31242.cljs$core$IFn$_invoke$arity$2 = week_field31242__2;
return week_field31242;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field31242);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box31243 = (function() {
var check_box31243 = null;
var check_box31243__1 = (function (name){return check_box31243.call(null,name,null);
});
var check_box31243__2 = (function (name,checked_QMARK_){return check_box31243.call(null,name,checked_QMARK_,"true");
});
var check_box31243__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box31243 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box31243__1.call(this,name);
case 2:
return check_box31243__2.call(this,name,checked_QMARK_);
case 3:
return check_box31243__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box31243.cljs$core$IFn$_invoke$arity$1 = check_box31243__1;
check_box31243.cljs$core$IFn$_invoke$arity$2 = check_box31243__2;
check_box31243.cljs$core$IFn$_invoke$arity$3 = check_box31243__3;
return check_box31243;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box31243);
/**
* Creates a radio button.
*/
sablono.core.radio_button31244 = (function() {
var radio_button31244 = null;
var radio_button31244__1 = (function (group){return radio_button31244.call(null,group,null);
});
var radio_button31244__2 = (function (group,checked_QMARK_){return radio_button31244.call(null,group,checked_QMARK_,"true");
});
var radio_button31244__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button31244 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button31244__1.call(this,group);
case 2:
return radio_button31244__2.call(this,group,checked_QMARK_);
case 3:
return radio_button31244__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button31244.cljs$core$IFn$_invoke$arity$1 = radio_button31244__1;
radio_button31244.cljs$core$IFn$_invoke$arity$2 = radio_button31244__2;
radio_button31244.cljs$core$IFn$_invoke$arity$3 = radio_button31244__3;
return radio_button31244;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button31244);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options31245 = (function() {
var select_options31245 = null;
var select_options31245__1 = (function (coll){return select_options31245.call(null,coll,null);
});
var select_options31245__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__31254(s__31255){return (new cljs.core.LazySeq(null,(function (){var s__31255__$1 = s__31255;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31255__$1);if(temp__4126__auto__)
{var s__31255__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31255__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__31255__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__31257 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__31256 = (0);while(true){
if((i__31256 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__31256);cljs.core.chunk_append.call(null,b__31257,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31260 = x;var text = cljs.core.nth.call(null,vec__31260,(0),null);var val = cljs.core.nth.call(null,vec__31260,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__31260,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options31245.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__31262 = (i__31256 + (1));
i__31256 = G__31262;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31257),iter__31254.call(null,cljs.core.chunk_rest.call(null,s__31255__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31257),null);
}
} else
{var x = cljs.core.first.call(null,s__31255__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31261 = x;var text = cljs.core.nth.call(null,vec__31261,(0),null);var val = cljs.core.nth.call(null,vec__31261,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__31261,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options31245.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__31254.call(null,cljs.core.rest.call(null,s__31255__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options31245 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options31245__1.call(this,coll);
case 2:
return select_options31245__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options31245.cljs$core$IFn$_invoke$arity$1 = select_options31245__1;
select_options31245.cljs$core$IFn$_invoke$arity$2 = select_options31245__2;
return select_options31245;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options31245);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down31263 = (function() {
var drop_down31263 = null;
var drop_down31263__2 = (function (name,options){return drop_down31263.call(null,name,options,null);
});
var drop_down31263__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down31263 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down31263__2.call(this,name,options);
case 3:
return drop_down31263__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down31263.cljs$core$IFn$_invoke$arity$2 = drop_down31263__2;
drop_down31263.cljs$core$IFn$_invoke$arity$3 = drop_down31263__3;
return drop_down31263;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down31263);
/**
* Creates a text area element.
*/
sablono.core.text_area31264 = (function() {
var text_area31264 = null;
var text_area31264__1 = (function (name){return text_area31264.call(null,name,null);
});
var text_area31264__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area31264 = function(name,value){
switch(arguments.length){
case 1:
return text_area31264__1.call(this,name);
case 2:
return text_area31264__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area31264.cljs$core$IFn$_invoke$arity$1 = text_area31264__1;
text_area31264.cljs$core$IFn$_invoke$arity$2 = text_area31264__2;
return text_area31264;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area31264);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label31265 = (function label31265(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label31265);
/**
* Creates a submit button.
*/
sablono.core.submit_button31266 = (function submit_button31266(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button31266);
/**
* Creates a form reset button.
*/
sablono.core.reset_button31267 = (function reset_button31267(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button31267);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to31268 = (function() { 
var form_to31268__delegate = function (p__31269,body){var vec__31271 = p__31269;var method = cljs.core.nth.call(null,vec__31271,(0),null);var action = cljs.core.nth.call(null,vec__31271,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to31268 = function (p__31269,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to31268__delegate.call(this,p__31269,body);};
form_to31268.cljs$lang$maxFixedArity = 1;
form_to31268.cljs$lang$applyTo = (function (arglist__31272){
var p__31269 = cljs.core.first(arglist__31272);
var body = cljs.core.rest(arglist__31272);
return form_to31268__delegate(p__31269,body);
});
form_to31268.cljs$core$IFn$_invoke$arity$variadic = form_to31268__delegate;
return form_to31268;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to31268);
