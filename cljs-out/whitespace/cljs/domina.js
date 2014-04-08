// Compiled by ClojureScript 0.0-2173
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_50196 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_50197 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_50198 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_50197,table_section_wrapper_50197,opt_wrapper_50196,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_50198,table_section_wrapper_50197,cell_wrapper_50198,opt_wrapper_50196,table_section_wrapper_50197,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_50197]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__50203 = cljs.core.seq.call(null,tbody);var chunk__50204 = null;var count__50205 = 0;var i__50206 = 0;while(true){
if((i__50206 < count__50205))
{var child = cljs.core._nth.call(null,chunk__50204,i__50206);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__50207 = seq__50203;
var G__50208 = chunk__50204;
var G__50209 = count__50205;
var G__50210 = (i__50206 + 1);
seq__50203 = G__50207;
chunk__50204 = G__50208;
count__50205 = G__50209;
i__50206 = G__50210;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50203);if(temp__4092__auto__)
{var seq__50203__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50203__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__50203__$1);{
var G__50211 = cljs.core.chunk_rest.call(null,seq__50203__$1);
var G__50212 = c__4189__auto__;
var G__50213 = cljs.core.count.call(null,c__4189__auto__);
var G__50214 = 0;
seq__50203 = G__50211;
chunk__50204 = G__50212;
count__50205 = G__50213;
i__50206 = G__50214;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__50203__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__50215 = cljs.core.next.call(null,seq__50203__$1);
var G__50216 = null;
var G__50217 = 0;
var G__50218 = 0;
seq__50203 = G__50215;
chunk__50204 = G__50216;
count__50205 = G__50217;
i__50206 = G__50218;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__50220 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__50220,0,null);var start_wrap = cljs.core.nth.call(null,vec__50220,1,null);var end_wrap = cljs.core.nth.call(null,vec__50220,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__50221 = wrapper.lastChild;
var G__50222 = (level - 1);
wrapper = G__50221;
level = G__50222;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3429__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3429__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj50224 = {};return obj50224;
})();
domina.nodes = (function nodes(content){if((function (){var and__3429__auto__ = content;if(and__3429__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3429__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4068__auto__ = (((content == null))?null:content);return (function (){var or__3441__auto__ = (domina.nodes[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.nodes["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3429__auto__ = nodeseq;if(and__3429__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3429__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4068__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3441__auto__ = (domina.single_node[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.single_node["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3429__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3429__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3429__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__50225){
var mesg = cljs.core.seq(arglist__50225);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__50226){
var mesg = cljs.core.seq(arglist__50226);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__50227){
var contents = cljs.core.seq(arglist__50227);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__50228_SHARP_){return p1__50228_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__50229_SHARP_,p2__50230_SHARP_){return goog.dom.insertChildAt(p1__50229_SHARP_,p2__50230_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__50232_SHARP_,p2__50231_SHARP_){return goog.dom.insertSiblingBefore(p2__50231_SHARP_,p1__50232_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__50234_SHARP_,p2__50233_SHARP_){return goog.dom.insertSiblingAfter(p2__50233_SHARP_,p1__50234_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__50236_SHARP_,p2__50235_SHARP_){return goog.dom.replaceNode(p2__50235_SHARP_,p1__50236_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__50241_50245 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50242_50246 = null;var count__50243_50247 = 0;var i__50244_50248 = 0;while(true){
if((i__50244_50248 < count__50243_50247))
{var n_50249 = cljs.core._nth.call(null,chunk__50242_50246,i__50244_50248);goog.style.setStyle(n_50249,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50250 = seq__50241_50245;
var G__50251 = chunk__50242_50246;
var G__50252 = count__50243_50247;
var G__50253 = (i__50244_50248 + 1);
seq__50241_50245 = G__50250;
chunk__50242_50246 = G__50251;
count__50243_50247 = G__50252;
i__50244_50248 = G__50253;
continue;
}
} else
{var temp__4092__auto___50254 = cljs.core.seq.call(null,seq__50241_50245);if(temp__4092__auto___50254)
{var seq__50241_50255__$1 = temp__4092__auto___50254;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50241_50255__$1))
{var c__4189__auto___50256 = cljs.core.chunk_first.call(null,seq__50241_50255__$1);{
var G__50257 = cljs.core.chunk_rest.call(null,seq__50241_50255__$1);
var G__50258 = c__4189__auto___50256;
var G__50259 = cljs.core.count.call(null,c__4189__auto___50256);
var G__50260 = 0;
seq__50241_50245 = G__50257;
chunk__50242_50246 = G__50258;
count__50243_50247 = G__50259;
i__50244_50248 = G__50260;
continue;
}
} else
{var n_50261 = cljs.core.first.call(null,seq__50241_50255__$1);goog.style.setStyle(n_50261,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50262 = cljs.core.next.call(null,seq__50241_50255__$1);
var G__50263 = null;
var G__50264 = 0;
var G__50265 = 0;
seq__50241_50245 = G__50262;
chunk__50242_50246 = G__50263;
count__50243_50247 = G__50264;
i__50244_50248 = G__50265;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__50266){
var content = cljs.core.first(arglist__50266);
arglist__50266 = cljs.core.next(arglist__50266);
var name = cljs.core.first(arglist__50266);
var value = cljs.core.rest(arglist__50266);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__50271_50275 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50272_50276 = null;var count__50273_50277 = 0;var i__50274_50278 = 0;while(true){
if((i__50274_50278 < count__50273_50277))
{var n_50279 = cljs.core._nth.call(null,chunk__50272_50276,i__50274_50278);n_50279.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50280 = seq__50271_50275;
var G__50281 = chunk__50272_50276;
var G__50282 = count__50273_50277;
var G__50283 = (i__50274_50278 + 1);
seq__50271_50275 = G__50280;
chunk__50272_50276 = G__50281;
count__50273_50277 = G__50282;
i__50274_50278 = G__50283;
continue;
}
} else
{var temp__4092__auto___50284 = cljs.core.seq.call(null,seq__50271_50275);if(temp__4092__auto___50284)
{var seq__50271_50285__$1 = temp__4092__auto___50284;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50271_50285__$1))
{var c__4189__auto___50286 = cljs.core.chunk_first.call(null,seq__50271_50285__$1);{
var G__50287 = cljs.core.chunk_rest.call(null,seq__50271_50285__$1);
var G__50288 = c__4189__auto___50286;
var G__50289 = cljs.core.count.call(null,c__4189__auto___50286);
var G__50290 = 0;
seq__50271_50275 = G__50287;
chunk__50272_50276 = G__50288;
count__50273_50277 = G__50289;
i__50274_50278 = G__50290;
continue;
}
} else
{var n_50291 = cljs.core.first.call(null,seq__50271_50285__$1);n_50291.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50292 = cljs.core.next.call(null,seq__50271_50285__$1);
var G__50293 = null;
var G__50294 = 0;
var G__50295 = 0;
seq__50271_50275 = G__50292;
chunk__50272_50276 = G__50293;
count__50273_50277 = G__50294;
i__50274_50278 = G__50295;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__50296){
var content = cljs.core.first(arglist__50296);
arglist__50296 = cljs.core.next(arglist__50296);
var name = cljs.core.first(arglist__50296);
var value = cljs.core.rest(arglist__50296);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__50301_50305 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50302_50306 = null;var count__50303_50307 = 0;var i__50304_50308 = 0;while(true){
if((i__50304_50308 < count__50303_50307))
{var n_50309 = cljs.core._nth.call(null,chunk__50302_50306,i__50304_50308);n_50309.removeAttribute(cljs.core.name.call(null,name));
{
var G__50310 = seq__50301_50305;
var G__50311 = chunk__50302_50306;
var G__50312 = count__50303_50307;
var G__50313 = (i__50304_50308 + 1);
seq__50301_50305 = G__50310;
chunk__50302_50306 = G__50311;
count__50303_50307 = G__50312;
i__50304_50308 = G__50313;
continue;
}
} else
{var temp__4092__auto___50314 = cljs.core.seq.call(null,seq__50301_50305);if(temp__4092__auto___50314)
{var seq__50301_50315__$1 = temp__4092__auto___50314;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50301_50315__$1))
{var c__4189__auto___50316 = cljs.core.chunk_first.call(null,seq__50301_50315__$1);{
var G__50317 = cljs.core.chunk_rest.call(null,seq__50301_50315__$1);
var G__50318 = c__4189__auto___50316;
var G__50319 = cljs.core.count.call(null,c__4189__auto___50316);
var G__50320 = 0;
seq__50301_50305 = G__50317;
chunk__50302_50306 = G__50318;
count__50303_50307 = G__50319;
i__50304_50308 = G__50320;
continue;
}
} else
{var n_50321 = cljs.core.first.call(null,seq__50301_50315__$1);n_50321.removeAttribute(cljs.core.name.call(null,name));
{
var G__50322 = cljs.core.next.call(null,seq__50301_50315__$1);
var G__50323 = null;
var G__50324 = 0;
var G__50325 = 0;
seq__50301_50305 = G__50322;
chunk__50302_50306 = G__50323;
count__50303_50307 = G__50324;
i__50304_50308 = G__50325;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__50327 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__50327,0,null);var v = cljs.core.nth.call(null,vec__50327,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
{return v;
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__50328_SHARP_){var attr = attrs__$1.item(p1__50328_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__50335_50341 = cljs.core.seq.call(null,styles);var chunk__50336_50342 = null;var count__50337_50343 = 0;var i__50338_50344 = 0;while(true){
if((i__50338_50344 < count__50337_50343))
{var vec__50339_50345 = cljs.core._nth.call(null,chunk__50336_50342,i__50338_50344);var name_50346 = cljs.core.nth.call(null,vec__50339_50345,0,null);var value_50347 = cljs.core.nth.call(null,vec__50339_50345,1,null);domina.set_style_BANG_.call(null,content,name_50346,value_50347);
{
var G__50348 = seq__50335_50341;
var G__50349 = chunk__50336_50342;
var G__50350 = count__50337_50343;
var G__50351 = (i__50338_50344 + 1);
seq__50335_50341 = G__50348;
chunk__50336_50342 = G__50349;
count__50337_50343 = G__50350;
i__50338_50344 = G__50351;
continue;
}
} else
{var temp__4092__auto___50352 = cljs.core.seq.call(null,seq__50335_50341);if(temp__4092__auto___50352)
{var seq__50335_50353__$1 = temp__4092__auto___50352;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50335_50353__$1))
{var c__4189__auto___50354 = cljs.core.chunk_first.call(null,seq__50335_50353__$1);{
var G__50355 = cljs.core.chunk_rest.call(null,seq__50335_50353__$1);
var G__50356 = c__4189__auto___50354;
var G__50357 = cljs.core.count.call(null,c__4189__auto___50354);
var G__50358 = 0;
seq__50335_50341 = G__50355;
chunk__50336_50342 = G__50356;
count__50337_50343 = G__50357;
i__50338_50344 = G__50358;
continue;
}
} else
{var vec__50340_50359 = cljs.core.first.call(null,seq__50335_50353__$1);var name_50360 = cljs.core.nth.call(null,vec__50340_50359,0,null);var value_50361 = cljs.core.nth.call(null,vec__50340_50359,1,null);domina.set_style_BANG_.call(null,content,name_50360,value_50361);
{
var G__50362 = cljs.core.next.call(null,seq__50335_50353__$1);
var G__50363 = null;
var G__50364 = 0;
var G__50365 = 0;
seq__50335_50341 = G__50362;
chunk__50336_50342 = G__50363;
count__50337_50343 = G__50364;
i__50338_50344 = G__50365;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__50372_50378 = cljs.core.seq.call(null,attrs);var chunk__50373_50379 = null;var count__50374_50380 = 0;var i__50375_50381 = 0;while(true){
if((i__50375_50381 < count__50374_50380))
{var vec__50376_50382 = cljs.core._nth.call(null,chunk__50373_50379,i__50375_50381);var name_50383 = cljs.core.nth.call(null,vec__50376_50382,0,null);var value_50384 = cljs.core.nth.call(null,vec__50376_50382,1,null);domina.set_attr_BANG_.call(null,content,name_50383,value_50384);
{
var G__50385 = seq__50372_50378;
var G__50386 = chunk__50373_50379;
var G__50387 = count__50374_50380;
var G__50388 = (i__50375_50381 + 1);
seq__50372_50378 = G__50385;
chunk__50373_50379 = G__50386;
count__50374_50380 = G__50387;
i__50375_50381 = G__50388;
continue;
}
} else
{var temp__4092__auto___50389 = cljs.core.seq.call(null,seq__50372_50378);if(temp__4092__auto___50389)
{var seq__50372_50390__$1 = temp__4092__auto___50389;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50372_50390__$1))
{var c__4189__auto___50391 = cljs.core.chunk_first.call(null,seq__50372_50390__$1);{
var G__50392 = cljs.core.chunk_rest.call(null,seq__50372_50390__$1);
var G__50393 = c__4189__auto___50391;
var G__50394 = cljs.core.count.call(null,c__4189__auto___50391);
var G__50395 = 0;
seq__50372_50378 = G__50392;
chunk__50373_50379 = G__50393;
count__50374_50380 = G__50394;
i__50375_50381 = G__50395;
continue;
}
} else
{var vec__50377_50396 = cljs.core.first.call(null,seq__50372_50390__$1);var name_50397 = cljs.core.nth.call(null,vec__50377_50396,0,null);var value_50398 = cljs.core.nth.call(null,vec__50377_50396,1,null);domina.set_attr_BANG_.call(null,content,name_50397,value_50398);
{
var G__50399 = cljs.core.next.call(null,seq__50372_50390__$1);
var G__50400 = null;
var G__50401 = 0;
var G__50402 = 0;
seq__50372_50378 = G__50399;
chunk__50373_50379 = G__50400;
count__50374_50380 = G__50401;
i__50375_50381 = G__50402;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__50407_50411 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50408_50412 = null;var count__50409_50413 = 0;var i__50410_50414 = 0;while(true){
if((i__50410_50414 < count__50409_50413))
{var node_50415 = cljs.core._nth.call(null,chunk__50408_50412,i__50410_50414);goog.dom.classes.add(node_50415,class$);
{
var G__50416 = seq__50407_50411;
var G__50417 = chunk__50408_50412;
var G__50418 = count__50409_50413;
var G__50419 = (i__50410_50414 + 1);
seq__50407_50411 = G__50416;
chunk__50408_50412 = G__50417;
count__50409_50413 = G__50418;
i__50410_50414 = G__50419;
continue;
}
} else
{var temp__4092__auto___50420 = cljs.core.seq.call(null,seq__50407_50411);if(temp__4092__auto___50420)
{var seq__50407_50421__$1 = temp__4092__auto___50420;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50407_50421__$1))
{var c__4189__auto___50422 = cljs.core.chunk_first.call(null,seq__50407_50421__$1);{
var G__50423 = cljs.core.chunk_rest.call(null,seq__50407_50421__$1);
var G__50424 = c__4189__auto___50422;
var G__50425 = cljs.core.count.call(null,c__4189__auto___50422);
var G__50426 = 0;
seq__50407_50411 = G__50423;
chunk__50408_50412 = G__50424;
count__50409_50413 = G__50425;
i__50410_50414 = G__50426;
continue;
}
} else
{var node_50427 = cljs.core.first.call(null,seq__50407_50421__$1);goog.dom.classes.add(node_50427,class$);
{
var G__50428 = cljs.core.next.call(null,seq__50407_50421__$1);
var G__50429 = null;
var G__50430 = 0;
var G__50431 = 0;
seq__50407_50411 = G__50428;
chunk__50408_50412 = G__50429;
count__50409_50413 = G__50430;
i__50410_50414 = G__50431;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__50436_50440 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50437_50441 = null;var count__50438_50442 = 0;var i__50439_50443 = 0;while(true){
if((i__50439_50443 < count__50438_50442))
{var node_50444 = cljs.core._nth.call(null,chunk__50437_50441,i__50439_50443);goog.dom.classes.remove(node_50444,class$);
{
var G__50445 = seq__50436_50440;
var G__50446 = chunk__50437_50441;
var G__50447 = count__50438_50442;
var G__50448 = (i__50439_50443 + 1);
seq__50436_50440 = G__50445;
chunk__50437_50441 = G__50446;
count__50438_50442 = G__50447;
i__50439_50443 = G__50448;
continue;
}
} else
{var temp__4092__auto___50449 = cljs.core.seq.call(null,seq__50436_50440);if(temp__4092__auto___50449)
{var seq__50436_50450__$1 = temp__4092__auto___50449;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50436_50450__$1))
{var c__4189__auto___50451 = cljs.core.chunk_first.call(null,seq__50436_50450__$1);{
var G__50452 = cljs.core.chunk_rest.call(null,seq__50436_50450__$1);
var G__50453 = c__4189__auto___50451;
var G__50454 = cljs.core.count.call(null,c__4189__auto___50451);
var G__50455 = 0;
seq__50436_50440 = G__50452;
chunk__50437_50441 = G__50453;
count__50438_50442 = G__50454;
i__50439_50443 = G__50455;
continue;
}
} else
{var node_50456 = cljs.core.first.call(null,seq__50436_50450__$1);goog.dom.classes.remove(node_50456,class$);
{
var G__50457 = cljs.core.next.call(null,seq__50436_50450__$1);
var G__50458 = null;
var G__50459 = 0;
var G__50460 = 0;
seq__50436_50440 = G__50457;
chunk__50437_50441 = G__50458;
count__50438_50442 = G__50459;
i__50439_50443 = G__50460;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__50465_50469 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50466_50470 = null;var count__50467_50471 = 0;var i__50468_50472 = 0;while(true){
if((i__50468_50472 < count__50467_50471))
{var node_50473 = cljs.core._nth.call(null,chunk__50466_50470,i__50468_50472);goog.dom.classes.toggle(node_50473,class$);
{
var G__50474 = seq__50465_50469;
var G__50475 = chunk__50466_50470;
var G__50476 = count__50467_50471;
var G__50477 = (i__50468_50472 + 1);
seq__50465_50469 = G__50474;
chunk__50466_50470 = G__50475;
count__50467_50471 = G__50476;
i__50468_50472 = G__50477;
continue;
}
} else
{var temp__4092__auto___50478 = cljs.core.seq.call(null,seq__50465_50469);if(temp__4092__auto___50478)
{var seq__50465_50479__$1 = temp__4092__auto___50478;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50465_50479__$1))
{var c__4189__auto___50480 = cljs.core.chunk_first.call(null,seq__50465_50479__$1);{
var G__50481 = cljs.core.chunk_rest.call(null,seq__50465_50479__$1);
var G__50482 = c__4189__auto___50480;
var G__50483 = cljs.core.count.call(null,c__4189__auto___50480);
var G__50484 = 0;
seq__50465_50469 = G__50481;
chunk__50466_50470 = G__50482;
count__50467_50471 = G__50483;
i__50468_50472 = G__50484;
continue;
}
} else
{var node_50485 = cljs.core.first.call(null,seq__50465_50479__$1);goog.dom.classes.toggle(node_50485,class$);
{
var G__50486 = cljs.core.next.call(null,seq__50465_50479__$1);
var G__50487 = null;
var G__50488 = 0;
var G__50489 = 0;
seq__50465_50469 = G__50486;
chunk__50466_50470 = G__50487;
count__50467_50471 = G__50488;
i__50468_50472 = G__50489;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_50498__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__50494_50499 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50495_50500 = null;var count__50496_50501 = 0;var i__50497_50502 = 0;while(true){
if((i__50497_50502 < count__50496_50501))
{var node_50503 = cljs.core._nth.call(null,chunk__50495_50500,i__50497_50502);goog.dom.classes.set(node_50503,classes_50498__$1);
{
var G__50504 = seq__50494_50499;
var G__50505 = chunk__50495_50500;
var G__50506 = count__50496_50501;
var G__50507 = (i__50497_50502 + 1);
seq__50494_50499 = G__50504;
chunk__50495_50500 = G__50505;
count__50496_50501 = G__50506;
i__50497_50502 = G__50507;
continue;
}
} else
{var temp__4092__auto___50508 = cljs.core.seq.call(null,seq__50494_50499);if(temp__4092__auto___50508)
{var seq__50494_50509__$1 = temp__4092__auto___50508;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50494_50509__$1))
{var c__4189__auto___50510 = cljs.core.chunk_first.call(null,seq__50494_50509__$1);{
var G__50511 = cljs.core.chunk_rest.call(null,seq__50494_50509__$1);
var G__50512 = c__4189__auto___50510;
var G__50513 = cljs.core.count.call(null,c__4189__auto___50510);
var G__50514 = 0;
seq__50494_50499 = G__50511;
chunk__50495_50500 = G__50512;
count__50496_50501 = G__50513;
i__50497_50502 = G__50514;
continue;
}
} else
{var node_50515 = cljs.core.first.call(null,seq__50494_50509__$1);goog.dom.classes.set(node_50515,classes_50498__$1);
{
var G__50516 = cljs.core.next.call(null,seq__50494_50509__$1);
var G__50517 = null;
var G__50518 = 0;
var G__50519 = 0;
seq__50494_50499 = G__50516;
chunk__50495_50500 = G__50517;
count__50496_50501 = G__50518;
i__50497_50502 = G__50519;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__50524_50528 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50525_50529 = null;var count__50526_50530 = 0;var i__50527_50531 = 0;while(true){
if((i__50527_50531 < count__50526_50530))
{var node_50532 = cljs.core._nth.call(null,chunk__50525_50529,i__50527_50531);goog.dom.setTextContent(node_50532,value);
{
var G__50533 = seq__50524_50528;
var G__50534 = chunk__50525_50529;
var G__50535 = count__50526_50530;
var G__50536 = (i__50527_50531 + 1);
seq__50524_50528 = G__50533;
chunk__50525_50529 = G__50534;
count__50526_50530 = G__50535;
i__50527_50531 = G__50536;
continue;
}
} else
{var temp__4092__auto___50537 = cljs.core.seq.call(null,seq__50524_50528);if(temp__4092__auto___50537)
{var seq__50524_50538__$1 = temp__4092__auto___50537;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50524_50538__$1))
{var c__4189__auto___50539 = cljs.core.chunk_first.call(null,seq__50524_50538__$1);{
var G__50540 = cljs.core.chunk_rest.call(null,seq__50524_50538__$1);
var G__50541 = c__4189__auto___50539;
var G__50542 = cljs.core.count.call(null,c__4189__auto___50539);
var G__50543 = 0;
seq__50524_50528 = G__50540;
chunk__50525_50529 = G__50541;
count__50526_50530 = G__50542;
i__50527_50531 = G__50543;
continue;
}
} else
{var node_50544 = cljs.core.first.call(null,seq__50524_50538__$1);goog.dom.setTextContent(node_50544,value);
{
var G__50545 = cljs.core.next.call(null,seq__50524_50538__$1);
var G__50546 = null;
var G__50547 = 0;
var G__50548 = 0;
seq__50524_50528 = G__50545;
chunk__50525_50529 = G__50546;
count__50526_50530 = G__50547;
i__50527_50531 = G__50548;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__50553_50557 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50554_50558 = null;var count__50555_50559 = 0;var i__50556_50560 = 0;while(true){
if((i__50556_50560 < count__50555_50559))
{var node_50561 = cljs.core._nth.call(null,chunk__50554_50558,i__50556_50560);goog.dom.forms.setValue(node_50561,value);
{
var G__50562 = seq__50553_50557;
var G__50563 = chunk__50554_50558;
var G__50564 = count__50555_50559;
var G__50565 = (i__50556_50560 + 1);
seq__50553_50557 = G__50562;
chunk__50554_50558 = G__50563;
count__50555_50559 = G__50564;
i__50556_50560 = G__50565;
continue;
}
} else
{var temp__4092__auto___50566 = cljs.core.seq.call(null,seq__50553_50557);if(temp__4092__auto___50566)
{var seq__50553_50567__$1 = temp__4092__auto___50566;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50553_50567__$1))
{var c__4189__auto___50568 = cljs.core.chunk_first.call(null,seq__50553_50567__$1);{
var G__50569 = cljs.core.chunk_rest.call(null,seq__50553_50567__$1);
var G__50570 = c__4189__auto___50568;
var G__50571 = cljs.core.count.call(null,c__4189__auto___50568);
var G__50572 = 0;
seq__50553_50557 = G__50569;
chunk__50554_50558 = G__50570;
count__50555_50559 = G__50571;
i__50556_50560 = G__50572;
continue;
}
} else
{var node_50573 = cljs.core.first.call(null,seq__50553_50567__$1);goog.dom.forms.setValue(node_50573,value);
{
var G__50574 = cljs.core.next.call(null,seq__50553_50567__$1);
var G__50575 = null;
var G__50576 = 0;
var G__50577 = 0;
seq__50553_50557 = G__50574;
chunk__50554_50558 = G__50575;
count__50555_50559 = G__50576;
i__50556_50560 = G__50577;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3429__auto__ = allows_inner_html_QMARK_;if(and__3429__auto__)
{var and__3429__auto____$1 = (function (){var or__3441__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3429__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{var value_50588 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__50584_50589 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50585_50590 = null;var count__50586_50591 = 0;var i__50587_50592 = 0;while(true){
if((i__50587_50592 < count__50586_50591))
{var node_50593 = cljs.core._nth.call(null,chunk__50585_50590,i__50587_50592);node_50593.innerHTML = value_50588;
{
var G__50594 = seq__50584_50589;
var G__50595 = chunk__50585_50590;
var G__50596 = count__50586_50591;
var G__50597 = (i__50587_50592 + 1);
seq__50584_50589 = G__50594;
chunk__50585_50590 = G__50595;
count__50586_50591 = G__50596;
i__50587_50592 = G__50597;
continue;
}
} else
{var temp__4092__auto___50598 = cljs.core.seq.call(null,seq__50584_50589);if(temp__4092__auto___50598)
{var seq__50584_50599__$1 = temp__4092__auto___50598;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50584_50599__$1))
{var c__4189__auto___50600 = cljs.core.chunk_first.call(null,seq__50584_50599__$1);{
var G__50601 = cljs.core.chunk_rest.call(null,seq__50584_50599__$1);
var G__50602 = c__4189__auto___50600;
var G__50603 = cljs.core.count.call(null,c__4189__auto___50600);
var G__50604 = 0;
seq__50584_50589 = G__50601;
chunk__50585_50590 = G__50602;
count__50586_50591 = G__50603;
i__50587_50592 = G__50604;
continue;
}
} else
{var node_50605 = cljs.core.first.call(null,seq__50584_50599__$1);node_50605.innerHTML = value_50588;
{
var G__50606 = cljs.core.next.call(null,seq__50584_50599__$1);
var G__50607 = null;
var G__50608 = 0;
var G__50609 = 0;
seq__50584_50589 = G__50606;
chunk__50585_50590 = G__50607;
count__50586_50591 = G__50608;
i__50587_50592 = G__50609;
continue;
}
}
} else
{}
}
break;
}
}catch (e50583){if((e50583 instanceof Error))
{var e_50610 = e50583;domina.replace_children_BANG_.call(null,content,value_50588);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50583;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3429__auto__ = bubble;if(cljs.core.truth_(and__3429__auto__))
{return (value == null);
} else
{return and__3429__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3441__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__50617_50621 = cljs.core.seq.call(null,children);var chunk__50618_50622 = null;var count__50619_50623 = 0;var i__50620_50624 = 0;while(true){
if((i__50620_50624 < count__50619_50623))
{var child_50625 = cljs.core._nth.call(null,chunk__50618_50622,i__50620_50624);frag.appendChild(child_50625);
{
var G__50626 = seq__50617_50621;
var G__50627 = chunk__50618_50622;
var G__50628 = count__50619_50623;
var G__50629 = (i__50620_50624 + 1);
seq__50617_50621 = G__50626;
chunk__50618_50622 = G__50627;
count__50619_50623 = G__50628;
i__50620_50624 = G__50629;
continue;
}
} else
{var temp__4092__auto___50630 = cljs.core.seq.call(null,seq__50617_50621);if(temp__4092__auto___50630)
{var seq__50617_50631__$1 = temp__4092__auto___50630;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50617_50631__$1))
{var c__4189__auto___50632 = cljs.core.chunk_first.call(null,seq__50617_50631__$1);{
var G__50633 = cljs.core.chunk_rest.call(null,seq__50617_50631__$1);
var G__50634 = c__4189__auto___50632;
var G__50635 = cljs.core.count.call(null,c__4189__auto___50632);
var G__50636 = 0;
seq__50617_50621 = G__50633;
chunk__50618_50622 = G__50634;
count__50619_50623 = G__50635;
i__50620_50624 = G__50636;
continue;
}
} else
{var child_50637 = cljs.core.first.call(null,seq__50617_50631__$1);frag.appendChild(child_50637);
{
var G__50638 = cljs.core.next.call(null,seq__50617_50631__$1);
var G__50639 = null;
var G__50640 = 0;
var G__50641 = 0;
seq__50617_50621 = G__50638;
chunk__50618_50622 = G__50639;
count__50619_50623 = G__50640;
i__50620_50624 = G__50641;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__50611_SHARP_,p2__50612_SHARP_){return f.call(null,p1__50611_SHARP_,p2__50612_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3429__auto__ = obj;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3429__auto____$1)
{return obj.length;
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__50643 = list_thing;if(G__50643)
{var bit__4091__auto__ = (G__50643.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50643.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50643.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50643);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50643);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__50644 = content;if(G__50644)
{var bit__4091__auto__ = (G__50644.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50644.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50644.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50644);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50644);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__50645 = content;if(G__50645)
{var bit__4091__auto__ = (G__50645.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50645.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50645.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50645);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50645);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
