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
var G__37198__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__37197 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__37197,(0),null);var body = cljs.core.nthnext.call(null,vec__37197,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__37198 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__37198__delegate.call(this,args);};
G__37198.cljs$lang$maxFixedArity = 0;
G__37198.cljs$lang$applyTo = (function (arglist__37199){
var args = cljs.core.seq(arglist__37199);
return G__37198__delegate(args);
});
G__37198.cljs$core$IFn$_invoke$arity$variadic = G__37198__delegate;
return G__37198;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__37204(s__37205){return (new cljs.core.LazySeq(null,(function (){var s__37205__$1 = s__37205;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37205__$1);if(temp__4126__auto__)
{var s__37205__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37205__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37205__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37207 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37206 = (0);while(true){
if((i__37206 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__37206);cljs.core.chunk_append.call(null,b__37207,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__37208 = (i__37206 + (1));
i__37206 = G__37208;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37207),iter__37204.call(null,cljs.core.chunk_rest.call(null,s__37205__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37207),null);
}
} else
{var args = cljs.core.first.call(null,s__37205__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__37204.call(null,cljs.core.rest.call(null,s__37205__$2)));
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
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__37213(s__37214){return (new cljs.core.LazySeq(null,(function (){var s__37214__$1 = s__37214;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37214__$1);if(temp__4126__auto__)
{var s__37214__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37214__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37214__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37216 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37215 = (0);while(true){
if((i__37215 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__37215);cljs.core.chunk_append.call(null,b__37216,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__37217 = (i__37215 + (1));
i__37215 = G__37217;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37216),iter__37213.call(null,cljs.core.chunk_rest.call(null,s__37214__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37216),null);
}
} else
{var style = cljs.core.first.call(null,s__37214__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__37213.call(null,cljs.core.rest.call(null,s__37214__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__37218){
var styles = cljs.core.seq(arglist__37218);
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
sablono.core.link_to37219 = (function() { 
var link_to37219__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to37219 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to37219__delegate.call(this,url,content);};
link_to37219.cljs$lang$maxFixedArity = 1;
link_to37219.cljs$lang$applyTo = (function (arglist__37220){
var url = cljs.core.first(arglist__37220);
var content = cljs.core.rest(arglist__37220);
return link_to37219__delegate(url,content);
});
link_to37219.cljs$core$IFn$_invoke$arity$variadic = link_to37219__delegate;
return link_to37219;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to37219);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to37221 = (function() { 
var mail_to37221__delegate = function (e_mail,p__37222){var vec__37224 = p__37222;var content = cljs.core.nth.call(null,vec__37224,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to37221 = function (e_mail,var_args){
var p__37222 = null;if (arguments.length > 1) {
  p__37222 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to37221__delegate.call(this,e_mail,p__37222);};
mail_to37221.cljs$lang$maxFixedArity = 1;
mail_to37221.cljs$lang$applyTo = (function (arglist__37225){
var e_mail = cljs.core.first(arglist__37225);
var p__37222 = cljs.core.rest(arglist__37225);
return mail_to37221__delegate(e_mail,p__37222);
});
mail_to37221.cljs$core$IFn$_invoke$arity$variadic = mail_to37221__delegate;
return mail_to37221;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to37221);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list37226 = (function unordered_list37226(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__37231(s__37232){return (new cljs.core.LazySeq(null,(function (){var s__37232__$1 = s__37232;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37232__$1);if(temp__4126__auto__)
{var s__37232__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37232__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37232__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37234 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37233 = (0);while(true){
if((i__37233 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__37233);cljs.core.chunk_append.call(null,b__37234,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__37235 = (i__37233 + (1));
i__37233 = G__37235;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37234),iter__37231.call(null,cljs.core.chunk_rest.call(null,s__37232__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37234),null);
}
} else
{var x = cljs.core.first.call(null,s__37232__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__37231.call(null,cljs.core.rest.call(null,s__37232__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list37226);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list37236 = (function ordered_list37236(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__37241(s__37242){return (new cljs.core.LazySeq(null,(function (){var s__37242__$1 = s__37242;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37242__$1);if(temp__4126__auto__)
{var s__37242__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37242__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37242__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37244 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37243 = (0);while(true){
if((i__37243 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__37243);cljs.core.chunk_append.call(null,b__37244,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__37245 = (i__37243 + (1));
i__37243 = G__37245;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37244),iter__37241.call(null,cljs.core.chunk_rest.call(null,s__37242__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37244),null);
}
} else
{var x = cljs.core.first.call(null,s__37242__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__37241.call(null,cljs.core.rest.call(null,s__37242__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list37236);
/**
* Create an image element.
*/
sablono.core.image37246 = (function() {
var image37246 = null;
var image37246__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image37246__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image37246 = function(src,alt){
switch(arguments.length){
case 1:
return image37246__1.call(this,src);
case 2:
return image37246__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image37246.cljs$core$IFn$_invoke$arity$1 = image37246__1;
image37246.cljs$core$IFn$_invoke$arity$2 = image37246__2;
return image37246;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image37246);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__37247_SHARP_,p2__37248_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37247_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37248_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__37249_SHARP_,p2__37250_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37249_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37250_SHARP_));
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
sablono.core.color_field37251 = (function() {
var color_field37251 = null;
var color_field37251__1 = (function (name__13522__auto__){return color_field37251.call(null,name__13522__auto__,null);
});
var color_field37251__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__13522__auto__,value__13523__auto__);
});
color_field37251 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return color_field37251__1.call(this,name__13522__auto__);
case 2:
return color_field37251__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field37251.cljs$core$IFn$_invoke$arity$1 = color_field37251__1;
color_field37251.cljs$core$IFn$_invoke$arity$2 = color_field37251__2;
return color_field37251;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field37251);
/**
* Creates a date input field.
*/
sablono.core.date_field37252 = (function() {
var date_field37252 = null;
var date_field37252__1 = (function (name__13522__auto__){return date_field37252.call(null,name__13522__auto__,null);
});
var date_field37252__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__13522__auto__,value__13523__auto__);
});
date_field37252 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return date_field37252__1.call(this,name__13522__auto__);
case 2:
return date_field37252__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field37252.cljs$core$IFn$_invoke$arity$1 = date_field37252__1;
date_field37252.cljs$core$IFn$_invoke$arity$2 = date_field37252__2;
return date_field37252;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field37252);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field37253 = (function() {
var datetime_field37253 = null;
var datetime_field37253__1 = (function (name__13522__auto__){return datetime_field37253.call(null,name__13522__auto__,null);
});
var datetime_field37253__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__13522__auto__,value__13523__auto__);
});
datetime_field37253 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return datetime_field37253__1.call(this,name__13522__auto__);
case 2:
return datetime_field37253__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field37253.cljs$core$IFn$_invoke$arity$1 = datetime_field37253__1;
datetime_field37253.cljs$core$IFn$_invoke$arity$2 = datetime_field37253__2;
return datetime_field37253;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field37253);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field37254 = (function() {
var datetime_local_field37254 = null;
var datetime_local_field37254__1 = (function (name__13522__auto__){return datetime_local_field37254.call(null,name__13522__auto__,null);
});
var datetime_local_field37254__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__13522__auto__,value__13523__auto__);
});
datetime_local_field37254 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return datetime_local_field37254__1.call(this,name__13522__auto__);
case 2:
return datetime_local_field37254__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field37254.cljs$core$IFn$_invoke$arity$1 = datetime_local_field37254__1;
datetime_local_field37254.cljs$core$IFn$_invoke$arity$2 = datetime_local_field37254__2;
return datetime_local_field37254;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field37254);
/**
* Creates a email input field.
*/
sablono.core.email_field37255 = (function() {
var email_field37255 = null;
var email_field37255__1 = (function (name__13522__auto__){return email_field37255.call(null,name__13522__auto__,null);
});
var email_field37255__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__13522__auto__,value__13523__auto__);
});
email_field37255 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return email_field37255__1.call(this,name__13522__auto__);
case 2:
return email_field37255__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field37255.cljs$core$IFn$_invoke$arity$1 = email_field37255__1;
email_field37255.cljs$core$IFn$_invoke$arity$2 = email_field37255__2;
return email_field37255;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field37255);
/**
* Creates a file input field.
*/
sablono.core.file_field37256 = (function() {
var file_field37256 = null;
var file_field37256__1 = (function (name__13522__auto__){return file_field37256.call(null,name__13522__auto__,null);
});
var file_field37256__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__13522__auto__,value__13523__auto__);
});
file_field37256 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return file_field37256__1.call(this,name__13522__auto__);
case 2:
return file_field37256__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field37256.cljs$core$IFn$_invoke$arity$1 = file_field37256__1;
file_field37256.cljs$core$IFn$_invoke$arity$2 = file_field37256__2;
return file_field37256;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field37256);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field37257 = (function() {
var hidden_field37257 = null;
var hidden_field37257__1 = (function (name__13522__auto__){return hidden_field37257.call(null,name__13522__auto__,null);
});
var hidden_field37257__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__13522__auto__,value__13523__auto__);
});
hidden_field37257 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return hidden_field37257__1.call(this,name__13522__auto__);
case 2:
return hidden_field37257__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field37257.cljs$core$IFn$_invoke$arity$1 = hidden_field37257__1;
hidden_field37257.cljs$core$IFn$_invoke$arity$2 = hidden_field37257__2;
return hidden_field37257;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field37257);
/**
* Creates a month input field.
*/
sablono.core.month_field37258 = (function() {
var month_field37258 = null;
var month_field37258__1 = (function (name__13522__auto__){return month_field37258.call(null,name__13522__auto__,null);
});
var month_field37258__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__13522__auto__,value__13523__auto__);
});
month_field37258 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return month_field37258__1.call(this,name__13522__auto__);
case 2:
return month_field37258__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field37258.cljs$core$IFn$_invoke$arity$1 = month_field37258__1;
month_field37258.cljs$core$IFn$_invoke$arity$2 = month_field37258__2;
return month_field37258;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field37258);
/**
* Creates a number input field.
*/
sablono.core.number_field37259 = (function() {
var number_field37259 = null;
var number_field37259__1 = (function (name__13522__auto__){return number_field37259.call(null,name__13522__auto__,null);
});
var number_field37259__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__13522__auto__,value__13523__auto__);
});
number_field37259 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return number_field37259__1.call(this,name__13522__auto__);
case 2:
return number_field37259__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field37259.cljs$core$IFn$_invoke$arity$1 = number_field37259__1;
number_field37259.cljs$core$IFn$_invoke$arity$2 = number_field37259__2;
return number_field37259;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field37259);
/**
* Creates a password input field.
*/
sablono.core.password_field37260 = (function() {
var password_field37260 = null;
var password_field37260__1 = (function (name__13522__auto__){return password_field37260.call(null,name__13522__auto__,null);
});
var password_field37260__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__13522__auto__,value__13523__auto__);
});
password_field37260 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return password_field37260__1.call(this,name__13522__auto__);
case 2:
return password_field37260__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field37260.cljs$core$IFn$_invoke$arity$1 = password_field37260__1;
password_field37260.cljs$core$IFn$_invoke$arity$2 = password_field37260__2;
return password_field37260;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field37260);
/**
* Creates a range input field.
*/
sablono.core.range_field37261 = (function() {
var range_field37261 = null;
var range_field37261__1 = (function (name__13522__auto__){return range_field37261.call(null,name__13522__auto__,null);
});
var range_field37261__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__13522__auto__,value__13523__auto__);
});
range_field37261 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return range_field37261__1.call(this,name__13522__auto__);
case 2:
return range_field37261__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field37261.cljs$core$IFn$_invoke$arity$1 = range_field37261__1;
range_field37261.cljs$core$IFn$_invoke$arity$2 = range_field37261__2;
return range_field37261;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field37261);
/**
* Creates a search input field.
*/
sablono.core.search_field37262 = (function() {
var search_field37262 = null;
var search_field37262__1 = (function (name__13522__auto__){return search_field37262.call(null,name__13522__auto__,null);
});
var search_field37262__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__13522__auto__,value__13523__auto__);
});
search_field37262 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return search_field37262__1.call(this,name__13522__auto__);
case 2:
return search_field37262__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field37262.cljs$core$IFn$_invoke$arity$1 = search_field37262__1;
search_field37262.cljs$core$IFn$_invoke$arity$2 = search_field37262__2;
return search_field37262;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field37262);
/**
* Creates a tel input field.
*/
sablono.core.tel_field37263 = (function() {
var tel_field37263 = null;
var tel_field37263__1 = (function (name__13522__auto__){return tel_field37263.call(null,name__13522__auto__,null);
});
var tel_field37263__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__13522__auto__,value__13523__auto__);
});
tel_field37263 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return tel_field37263__1.call(this,name__13522__auto__);
case 2:
return tel_field37263__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field37263.cljs$core$IFn$_invoke$arity$1 = tel_field37263__1;
tel_field37263.cljs$core$IFn$_invoke$arity$2 = tel_field37263__2;
return tel_field37263;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field37263);
/**
* Creates a text input field.
*/
sablono.core.text_field37264 = (function() {
var text_field37264 = null;
var text_field37264__1 = (function (name__13522__auto__){return text_field37264.call(null,name__13522__auto__,null);
});
var text_field37264__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__13522__auto__,value__13523__auto__);
});
text_field37264 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return text_field37264__1.call(this,name__13522__auto__);
case 2:
return text_field37264__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field37264.cljs$core$IFn$_invoke$arity$1 = text_field37264__1;
text_field37264.cljs$core$IFn$_invoke$arity$2 = text_field37264__2;
return text_field37264;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field37264);
/**
* Creates a time input field.
*/
sablono.core.time_field37265 = (function() {
var time_field37265 = null;
var time_field37265__1 = (function (name__13522__auto__){return time_field37265.call(null,name__13522__auto__,null);
});
var time_field37265__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__13522__auto__,value__13523__auto__);
});
time_field37265 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return time_field37265__1.call(this,name__13522__auto__);
case 2:
return time_field37265__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field37265.cljs$core$IFn$_invoke$arity$1 = time_field37265__1;
time_field37265.cljs$core$IFn$_invoke$arity$2 = time_field37265__2;
return time_field37265;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field37265);
/**
* Creates a url input field.
*/
sablono.core.url_field37266 = (function() {
var url_field37266 = null;
var url_field37266__1 = (function (name__13522__auto__){return url_field37266.call(null,name__13522__auto__,null);
});
var url_field37266__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__13522__auto__,value__13523__auto__);
});
url_field37266 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return url_field37266__1.call(this,name__13522__auto__);
case 2:
return url_field37266__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field37266.cljs$core$IFn$_invoke$arity$1 = url_field37266__1;
url_field37266.cljs$core$IFn$_invoke$arity$2 = url_field37266__2;
return url_field37266;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field37266);
/**
* Creates a week input field.
*/
sablono.core.week_field37267 = (function() {
var week_field37267 = null;
var week_field37267__1 = (function (name__13522__auto__){return week_field37267.call(null,name__13522__auto__,null);
});
var week_field37267__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__13522__auto__,value__13523__auto__);
});
week_field37267 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return week_field37267__1.call(this,name__13522__auto__);
case 2:
return week_field37267__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field37267.cljs$core$IFn$_invoke$arity$1 = week_field37267__1;
week_field37267.cljs$core$IFn$_invoke$arity$2 = week_field37267__2;
return week_field37267;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field37267);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box37268 = (function() {
var check_box37268 = null;
var check_box37268__1 = (function (name){return check_box37268.call(null,name,null);
});
var check_box37268__2 = (function (name,checked_QMARK_){return check_box37268.call(null,name,checked_QMARK_,"true");
});
var check_box37268__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box37268 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box37268__1.call(this,name);
case 2:
return check_box37268__2.call(this,name,checked_QMARK_);
case 3:
return check_box37268__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box37268.cljs$core$IFn$_invoke$arity$1 = check_box37268__1;
check_box37268.cljs$core$IFn$_invoke$arity$2 = check_box37268__2;
check_box37268.cljs$core$IFn$_invoke$arity$3 = check_box37268__3;
return check_box37268;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box37268);
/**
* Creates a radio button.
*/
sablono.core.radio_button37269 = (function() {
var radio_button37269 = null;
var radio_button37269__1 = (function (group){return radio_button37269.call(null,group,null);
});
var radio_button37269__2 = (function (group,checked_QMARK_){return radio_button37269.call(null,group,checked_QMARK_,"true");
});
var radio_button37269__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button37269 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button37269__1.call(this,group);
case 2:
return radio_button37269__2.call(this,group,checked_QMARK_);
case 3:
return radio_button37269__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button37269.cljs$core$IFn$_invoke$arity$1 = radio_button37269__1;
radio_button37269.cljs$core$IFn$_invoke$arity$2 = radio_button37269__2;
radio_button37269.cljs$core$IFn$_invoke$arity$3 = radio_button37269__3;
return radio_button37269;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button37269);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options37270 = (function() {
var select_options37270 = null;
var select_options37270__1 = (function (coll){return select_options37270.call(null,coll,null);
});
var select_options37270__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__37279(s__37280){return (new cljs.core.LazySeq(null,(function (){var s__37280__$1 = s__37280;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37280__$1);if(temp__4126__auto__)
{var s__37280__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37280__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37280__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37282 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37281 = (0);while(true){
if((i__37281 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__37281);cljs.core.chunk_append.call(null,b__37282,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37285 = x;var text = cljs.core.nth.call(null,vec__37285,(0),null);var val = cljs.core.nth.call(null,vec__37285,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__37285,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options37270.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__37287 = (i__37281 + (1));
i__37281 = G__37287;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37282),iter__37279.call(null,cljs.core.chunk_rest.call(null,s__37280__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37282),null);
}
} else
{var x = cljs.core.first.call(null,s__37280__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37286 = x;var text = cljs.core.nth.call(null,vec__37286,(0),null);var val = cljs.core.nth.call(null,vec__37286,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__37286,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options37270.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__37279.call(null,cljs.core.rest.call(null,s__37280__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options37270 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options37270__1.call(this,coll);
case 2:
return select_options37270__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options37270.cljs$core$IFn$_invoke$arity$1 = select_options37270__1;
select_options37270.cljs$core$IFn$_invoke$arity$2 = select_options37270__2;
return select_options37270;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options37270);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down37288 = (function() {
var drop_down37288 = null;
var drop_down37288__2 = (function (name,options){return drop_down37288.call(null,name,options,null);
});
var drop_down37288__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down37288 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down37288__2.call(this,name,options);
case 3:
return drop_down37288__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down37288.cljs$core$IFn$_invoke$arity$2 = drop_down37288__2;
drop_down37288.cljs$core$IFn$_invoke$arity$3 = drop_down37288__3;
return drop_down37288;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down37288);
/**
* Creates a text area element.
*/
sablono.core.text_area37289 = (function() {
var text_area37289 = null;
var text_area37289__1 = (function (name){return text_area37289.call(null,name,null);
});
var text_area37289__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area37289 = function(name,value){
switch(arguments.length){
case 1:
return text_area37289__1.call(this,name);
case 2:
return text_area37289__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area37289.cljs$core$IFn$_invoke$arity$1 = text_area37289__1;
text_area37289.cljs$core$IFn$_invoke$arity$2 = text_area37289__2;
return text_area37289;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area37289);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label37290 = (function label37290(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label37290);
/**
* Creates a submit button.
*/
sablono.core.submit_button37291 = (function submit_button37291(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button37291);
/**
* Creates a form reset button.
*/
sablono.core.reset_button37292 = (function reset_button37292(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button37292);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to37293 = (function() { 
var form_to37293__delegate = function (p__37294,body){var vec__37296 = p__37294;var method = cljs.core.nth.call(null,vec__37296,(0),null);var action = cljs.core.nth.call(null,vec__37296,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to37293 = function (p__37294,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to37293__delegate.call(this,p__37294,body);};
form_to37293.cljs$lang$maxFixedArity = 1;
form_to37293.cljs$lang$applyTo = (function (arglist__37297){
var p__37294 = cljs.core.first(arglist__37297);
var body = cljs.core.rest(arglist__37297);
return form_to37293__delegate(p__37294,body);
});
form_to37293.cljs$core$IFn$_invoke$arity$variadic = form_to37293__delegate;
return form_to37293;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to37293);
