// Compiled by ClojureScript 0.0-2138
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
var opt_wrapper_38272 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_38273 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_38274 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_38273,table_section_wrapper_38273,opt_wrapper_38272,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_38274,table_section_wrapper_38273,cell_wrapper_38274,opt_wrapper_38272,table_section_wrapper_38273,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_38273]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__38279 = cljs.core.seq.call(null,tbody);var chunk__38280 = null;var count__38281 = 0;var i__38282 = 0;while(true){
if((i__38282 < count__38281))
{var child = cljs.core._nth.call(null,chunk__38280,i__38282);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__38283 = seq__38279;
var G__38284 = chunk__38280;
var G__38285 = count__38281;
var G__38286 = (i__38282 + 1);
seq__38279 = G__38283;
chunk__38280 = G__38284;
count__38281 = G__38285;
i__38282 = G__38286;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38279);if(temp__4092__auto__)
{var seq__38279__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38279__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38279__$1);{
var G__38287 = cljs.core.chunk_rest.call(null,seq__38279__$1);
var G__38288 = c__4148__auto__;
var G__38289 = cljs.core.count.call(null,c__4148__auto__);
var G__38290 = 0;
seq__38279 = G__38287;
chunk__38280 = G__38288;
count__38281 = G__38289;
i__38282 = G__38290;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__38279__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__38291 = cljs.core.next.call(null,seq__38279__$1);
var G__38292 = null;
var G__38293 = 0;
var G__38294 = 0;
seq__38279 = G__38291;
chunk__38280 = G__38292;
count__38281 = G__38293;
i__38282 = G__38294;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__38296 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__38296,0,null);var start_wrap = cljs.core.nth.call(null,vec__38296,1,null);var end_wrap = cljs.core.nth.call(null,vec__38296,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__38297 = wrapper.lastChild;
var G__38298 = (level - 1);
wrapper = G__38297;
level = G__38298;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj38300 = {};return obj38300;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__38301){
var mesg = cljs.core.seq(arglist__38301);
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
log.cljs$lang$applyTo = (function (arglist__38302){
var mesg = cljs.core.seq(arglist__38302);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__38303){
var contents = cljs.core.seq(arglist__38303);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__38304_SHARP_){return p1__38304_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__38305_SHARP_,p2__38306_SHARP_){return goog.dom.insertChildAt(p1__38305_SHARP_,p2__38306_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__38308_SHARP_,p2__38307_SHARP_){return goog.dom.insertSiblingBefore(p2__38307_SHARP_,p1__38308_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__38310_SHARP_,p2__38309_SHARP_){return goog.dom.insertSiblingAfter(p2__38309_SHARP_,p1__38310_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__38312_SHARP_,p2__38311_SHARP_){return goog.dom.replaceNode(p2__38311_SHARP_,p1__38312_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__38317_38321 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38318_38322 = null;var count__38319_38323 = 0;var i__38320_38324 = 0;while(true){
if((i__38320_38324 < count__38319_38323))
{var n_38325 = cljs.core._nth.call(null,chunk__38318_38322,i__38320_38324);goog.style.setStyle(n_38325,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38326 = seq__38317_38321;
var G__38327 = chunk__38318_38322;
var G__38328 = count__38319_38323;
var G__38329 = (i__38320_38324 + 1);
seq__38317_38321 = G__38326;
chunk__38318_38322 = G__38327;
count__38319_38323 = G__38328;
i__38320_38324 = G__38329;
continue;
}
} else
{var temp__4092__auto___38330 = cljs.core.seq.call(null,seq__38317_38321);if(temp__4092__auto___38330)
{var seq__38317_38331__$1 = temp__4092__auto___38330;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38317_38331__$1))
{var c__4148__auto___38332 = cljs.core.chunk_first.call(null,seq__38317_38331__$1);{
var G__38333 = cljs.core.chunk_rest.call(null,seq__38317_38331__$1);
var G__38334 = c__4148__auto___38332;
var G__38335 = cljs.core.count.call(null,c__4148__auto___38332);
var G__38336 = 0;
seq__38317_38321 = G__38333;
chunk__38318_38322 = G__38334;
count__38319_38323 = G__38335;
i__38320_38324 = G__38336;
continue;
}
} else
{var n_38337 = cljs.core.first.call(null,seq__38317_38331__$1);goog.style.setStyle(n_38337,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38338 = cljs.core.next.call(null,seq__38317_38331__$1);
var G__38339 = null;
var G__38340 = 0;
var G__38341 = 0;
seq__38317_38321 = G__38338;
chunk__38318_38322 = G__38339;
count__38319_38323 = G__38340;
i__38320_38324 = G__38341;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__38342){
var content = cljs.core.first(arglist__38342);
arglist__38342 = cljs.core.next(arglist__38342);
var name = cljs.core.first(arglist__38342);
var value = cljs.core.rest(arglist__38342);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__38347_38351 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38348_38352 = null;var count__38349_38353 = 0;var i__38350_38354 = 0;while(true){
if((i__38350_38354 < count__38349_38353))
{var n_38355 = cljs.core._nth.call(null,chunk__38348_38352,i__38350_38354);n_38355.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38356 = seq__38347_38351;
var G__38357 = chunk__38348_38352;
var G__38358 = count__38349_38353;
var G__38359 = (i__38350_38354 + 1);
seq__38347_38351 = G__38356;
chunk__38348_38352 = G__38357;
count__38349_38353 = G__38358;
i__38350_38354 = G__38359;
continue;
}
} else
{var temp__4092__auto___38360 = cljs.core.seq.call(null,seq__38347_38351);if(temp__4092__auto___38360)
{var seq__38347_38361__$1 = temp__4092__auto___38360;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38347_38361__$1))
{var c__4148__auto___38362 = cljs.core.chunk_first.call(null,seq__38347_38361__$1);{
var G__38363 = cljs.core.chunk_rest.call(null,seq__38347_38361__$1);
var G__38364 = c__4148__auto___38362;
var G__38365 = cljs.core.count.call(null,c__4148__auto___38362);
var G__38366 = 0;
seq__38347_38351 = G__38363;
chunk__38348_38352 = G__38364;
count__38349_38353 = G__38365;
i__38350_38354 = G__38366;
continue;
}
} else
{var n_38367 = cljs.core.first.call(null,seq__38347_38361__$1);n_38367.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38368 = cljs.core.next.call(null,seq__38347_38361__$1);
var G__38369 = null;
var G__38370 = 0;
var G__38371 = 0;
seq__38347_38351 = G__38368;
chunk__38348_38352 = G__38369;
count__38349_38353 = G__38370;
i__38350_38354 = G__38371;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__38372){
var content = cljs.core.first(arglist__38372);
arglist__38372 = cljs.core.next(arglist__38372);
var name = cljs.core.first(arglist__38372);
var value = cljs.core.rest(arglist__38372);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__38377_38381 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38378_38382 = null;var count__38379_38383 = 0;var i__38380_38384 = 0;while(true){
if((i__38380_38384 < count__38379_38383))
{var n_38385 = cljs.core._nth.call(null,chunk__38378_38382,i__38380_38384);n_38385.removeAttribute(cljs.core.name.call(null,name));
{
var G__38386 = seq__38377_38381;
var G__38387 = chunk__38378_38382;
var G__38388 = count__38379_38383;
var G__38389 = (i__38380_38384 + 1);
seq__38377_38381 = G__38386;
chunk__38378_38382 = G__38387;
count__38379_38383 = G__38388;
i__38380_38384 = G__38389;
continue;
}
} else
{var temp__4092__auto___38390 = cljs.core.seq.call(null,seq__38377_38381);if(temp__4092__auto___38390)
{var seq__38377_38391__$1 = temp__4092__auto___38390;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38377_38391__$1))
{var c__4148__auto___38392 = cljs.core.chunk_first.call(null,seq__38377_38391__$1);{
var G__38393 = cljs.core.chunk_rest.call(null,seq__38377_38391__$1);
var G__38394 = c__4148__auto___38392;
var G__38395 = cljs.core.count.call(null,c__4148__auto___38392);
var G__38396 = 0;
seq__38377_38381 = G__38393;
chunk__38378_38382 = G__38394;
count__38379_38383 = G__38395;
i__38380_38384 = G__38396;
continue;
}
} else
{var n_38397 = cljs.core.first.call(null,seq__38377_38391__$1);n_38397.removeAttribute(cljs.core.name.call(null,name));
{
var G__38398 = cljs.core.next.call(null,seq__38377_38391__$1);
var G__38399 = null;
var G__38400 = 0;
var G__38401 = 0;
seq__38377_38381 = G__38398;
chunk__38378_38382 = G__38399;
count__38379_38383 = G__38400;
i__38380_38384 = G__38401;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__38403 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__38403,0,null);var v = cljs.core.nth.call(null,vec__38403,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__38404_SHARP_){var attr = attrs__$1.item(p1__38404_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__38411_38417 = cljs.core.seq.call(null,styles);var chunk__38412_38418 = null;var count__38413_38419 = 0;var i__38414_38420 = 0;while(true){
if((i__38414_38420 < count__38413_38419))
{var vec__38415_38421 = cljs.core._nth.call(null,chunk__38412_38418,i__38414_38420);var name_38422 = cljs.core.nth.call(null,vec__38415_38421,0,null);var value_38423 = cljs.core.nth.call(null,vec__38415_38421,1,null);domina.set_style_BANG_.call(null,content,name_38422,value_38423);
{
var G__38424 = seq__38411_38417;
var G__38425 = chunk__38412_38418;
var G__38426 = count__38413_38419;
var G__38427 = (i__38414_38420 + 1);
seq__38411_38417 = G__38424;
chunk__38412_38418 = G__38425;
count__38413_38419 = G__38426;
i__38414_38420 = G__38427;
continue;
}
} else
{var temp__4092__auto___38428 = cljs.core.seq.call(null,seq__38411_38417);if(temp__4092__auto___38428)
{var seq__38411_38429__$1 = temp__4092__auto___38428;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38411_38429__$1))
{var c__4148__auto___38430 = cljs.core.chunk_first.call(null,seq__38411_38429__$1);{
var G__38431 = cljs.core.chunk_rest.call(null,seq__38411_38429__$1);
var G__38432 = c__4148__auto___38430;
var G__38433 = cljs.core.count.call(null,c__4148__auto___38430);
var G__38434 = 0;
seq__38411_38417 = G__38431;
chunk__38412_38418 = G__38432;
count__38413_38419 = G__38433;
i__38414_38420 = G__38434;
continue;
}
} else
{var vec__38416_38435 = cljs.core.first.call(null,seq__38411_38429__$1);var name_38436 = cljs.core.nth.call(null,vec__38416_38435,0,null);var value_38437 = cljs.core.nth.call(null,vec__38416_38435,1,null);domina.set_style_BANG_.call(null,content,name_38436,value_38437);
{
var G__38438 = cljs.core.next.call(null,seq__38411_38429__$1);
var G__38439 = null;
var G__38440 = 0;
var G__38441 = 0;
seq__38411_38417 = G__38438;
chunk__38412_38418 = G__38439;
count__38413_38419 = G__38440;
i__38414_38420 = G__38441;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__38448_38454 = cljs.core.seq.call(null,attrs);var chunk__38449_38455 = null;var count__38450_38456 = 0;var i__38451_38457 = 0;while(true){
if((i__38451_38457 < count__38450_38456))
{var vec__38452_38458 = cljs.core._nth.call(null,chunk__38449_38455,i__38451_38457);var name_38459 = cljs.core.nth.call(null,vec__38452_38458,0,null);var value_38460 = cljs.core.nth.call(null,vec__38452_38458,1,null);domina.set_attr_BANG_.call(null,content,name_38459,value_38460);
{
var G__38461 = seq__38448_38454;
var G__38462 = chunk__38449_38455;
var G__38463 = count__38450_38456;
var G__38464 = (i__38451_38457 + 1);
seq__38448_38454 = G__38461;
chunk__38449_38455 = G__38462;
count__38450_38456 = G__38463;
i__38451_38457 = G__38464;
continue;
}
} else
{var temp__4092__auto___38465 = cljs.core.seq.call(null,seq__38448_38454);if(temp__4092__auto___38465)
{var seq__38448_38466__$1 = temp__4092__auto___38465;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38448_38466__$1))
{var c__4148__auto___38467 = cljs.core.chunk_first.call(null,seq__38448_38466__$1);{
var G__38468 = cljs.core.chunk_rest.call(null,seq__38448_38466__$1);
var G__38469 = c__4148__auto___38467;
var G__38470 = cljs.core.count.call(null,c__4148__auto___38467);
var G__38471 = 0;
seq__38448_38454 = G__38468;
chunk__38449_38455 = G__38469;
count__38450_38456 = G__38470;
i__38451_38457 = G__38471;
continue;
}
} else
{var vec__38453_38472 = cljs.core.first.call(null,seq__38448_38466__$1);var name_38473 = cljs.core.nth.call(null,vec__38453_38472,0,null);var value_38474 = cljs.core.nth.call(null,vec__38453_38472,1,null);domina.set_attr_BANG_.call(null,content,name_38473,value_38474);
{
var G__38475 = cljs.core.next.call(null,seq__38448_38466__$1);
var G__38476 = null;
var G__38477 = 0;
var G__38478 = 0;
seq__38448_38454 = G__38475;
chunk__38449_38455 = G__38476;
count__38450_38456 = G__38477;
i__38451_38457 = G__38478;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__38483_38487 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38484_38488 = null;var count__38485_38489 = 0;var i__38486_38490 = 0;while(true){
if((i__38486_38490 < count__38485_38489))
{var node_38491 = cljs.core._nth.call(null,chunk__38484_38488,i__38486_38490);goog.dom.classes.add(node_38491,class$);
{
var G__38492 = seq__38483_38487;
var G__38493 = chunk__38484_38488;
var G__38494 = count__38485_38489;
var G__38495 = (i__38486_38490 + 1);
seq__38483_38487 = G__38492;
chunk__38484_38488 = G__38493;
count__38485_38489 = G__38494;
i__38486_38490 = G__38495;
continue;
}
} else
{var temp__4092__auto___38496 = cljs.core.seq.call(null,seq__38483_38487);if(temp__4092__auto___38496)
{var seq__38483_38497__$1 = temp__4092__auto___38496;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38483_38497__$1))
{var c__4148__auto___38498 = cljs.core.chunk_first.call(null,seq__38483_38497__$1);{
var G__38499 = cljs.core.chunk_rest.call(null,seq__38483_38497__$1);
var G__38500 = c__4148__auto___38498;
var G__38501 = cljs.core.count.call(null,c__4148__auto___38498);
var G__38502 = 0;
seq__38483_38487 = G__38499;
chunk__38484_38488 = G__38500;
count__38485_38489 = G__38501;
i__38486_38490 = G__38502;
continue;
}
} else
{var node_38503 = cljs.core.first.call(null,seq__38483_38497__$1);goog.dom.classes.add(node_38503,class$);
{
var G__38504 = cljs.core.next.call(null,seq__38483_38497__$1);
var G__38505 = null;
var G__38506 = 0;
var G__38507 = 0;
seq__38483_38487 = G__38504;
chunk__38484_38488 = G__38505;
count__38485_38489 = G__38506;
i__38486_38490 = G__38507;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__38512_38516 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38513_38517 = null;var count__38514_38518 = 0;var i__38515_38519 = 0;while(true){
if((i__38515_38519 < count__38514_38518))
{var node_38520 = cljs.core._nth.call(null,chunk__38513_38517,i__38515_38519);goog.dom.classes.remove(node_38520,class$);
{
var G__38521 = seq__38512_38516;
var G__38522 = chunk__38513_38517;
var G__38523 = count__38514_38518;
var G__38524 = (i__38515_38519 + 1);
seq__38512_38516 = G__38521;
chunk__38513_38517 = G__38522;
count__38514_38518 = G__38523;
i__38515_38519 = G__38524;
continue;
}
} else
{var temp__4092__auto___38525 = cljs.core.seq.call(null,seq__38512_38516);if(temp__4092__auto___38525)
{var seq__38512_38526__$1 = temp__4092__auto___38525;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38512_38526__$1))
{var c__4148__auto___38527 = cljs.core.chunk_first.call(null,seq__38512_38526__$1);{
var G__38528 = cljs.core.chunk_rest.call(null,seq__38512_38526__$1);
var G__38529 = c__4148__auto___38527;
var G__38530 = cljs.core.count.call(null,c__4148__auto___38527);
var G__38531 = 0;
seq__38512_38516 = G__38528;
chunk__38513_38517 = G__38529;
count__38514_38518 = G__38530;
i__38515_38519 = G__38531;
continue;
}
} else
{var node_38532 = cljs.core.first.call(null,seq__38512_38526__$1);goog.dom.classes.remove(node_38532,class$);
{
var G__38533 = cljs.core.next.call(null,seq__38512_38526__$1);
var G__38534 = null;
var G__38535 = 0;
var G__38536 = 0;
seq__38512_38516 = G__38533;
chunk__38513_38517 = G__38534;
count__38514_38518 = G__38535;
i__38515_38519 = G__38536;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__38541_38545 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38542_38546 = null;var count__38543_38547 = 0;var i__38544_38548 = 0;while(true){
if((i__38544_38548 < count__38543_38547))
{var node_38549 = cljs.core._nth.call(null,chunk__38542_38546,i__38544_38548);goog.dom.classes.toggle(node_38549,class$);
{
var G__38550 = seq__38541_38545;
var G__38551 = chunk__38542_38546;
var G__38552 = count__38543_38547;
var G__38553 = (i__38544_38548 + 1);
seq__38541_38545 = G__38550;
chunk__38542_38546 = G__38551;
count__38543_38547 = G__38552;
i__38544_38548 = G__38553;
continue;
}
} else
{var temp__4092__auto___38554 = cljs.core.seq.call(null,seq__38541_38545);if(temp__4092__auto___38554)
{var seq__38541_38555__$1 = temp__4092__auto___38554;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38541_38555__$1))
{var c__4148__auto___38556 = cljs.core.chunk_first.call(null,seq__38541_38555__$1);{
var G__38557 = cljs.core.chunk_rest.call(null,seq__38541_38555__$1);
var G__38558 = c__4148__auto___38556;
var G__38559 = cljs.core.count.call(null,c__4148__auto___38556);
var G__38560 = 0;
seq__38541_38545 = G__38557;
chunk__38542_38546 = G__38558;
count__38543_38547 = G__38559;
i__38544_38548 = G__38560;
continue;
}
} else
{var node_38561 = cljs.core.first.call(null,seq__38541_38555__$1);goog.dom.classes.toggle(node_38561,class$);
{
var G__38562 = cljs.core.next.call(null,seq__38541_38555__$1);
var G__38563 = null;
var G__38564 = 0;
var G__38565 = 0;
seq__38541_38545 = G__38562;
chunk__38542_38546 = G__38563;
count__38543_38547 = G__38564;
i__38544_38548 = G__38565;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_38574__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__38570_38575 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38571_38576 = null;var count__38572_38577 = 0;var i__38573_38578 = 0;while(true){
if((i__38573_38578 < count__38572_38577))
{var node_38579 = cljs.core._nth.call(null,chunk__38571_38576,i__38573_38578);goog.dom.classes.set(node_38579,classes_38574__$1);
{
var G__38580 = seq__38570_38575;
var G__38581 = chunk__38571_38576;
var G__38582 = count__38572_38577;
var G__38583 = (i__38573_38578 + 1);
seq__38570_38575 = G__38580;
chunk__38571_38576 = G__38581;
count__38572_38577 = G__38582;
i__38573_38578 = G__38583;
continue;
}
} else
{var temp__4092__auto___38584 = cljs.core.seq.call(null,seq__38570_38575);if(temp__4092__auto___38584)
{var seq__38570_38585__$1 = temp__4092__auto___38584;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38570_38585__$1))
{var c__4148__auto___38586 = cljs.core.chunk_first.call(null,seq__38570_38585__$1);{
var G__38587 = cljs.core.chunk_rest.call(null,seq__38570_38585__$1);
var G__38588 = c__4148__auto___38586;
var G__38589 = cljs.core.count.call(null,c__4148__auto___38586);
var G__38590 = 0;
seq__38570_38575 = G__38587;
chunk__38571_38576 = G__38588;
count__38572_38577 = G__38589;
i__38573_38578 = G__38590;
continue;
}
} else
{var node_38591 = cljs.core.first.call(null,seq__38570_38585__$1);goog.dom.classes.set(node_38591,classes_38574__$1);
{
var G__38592 = cljs.core.next.call(null,seq__38570_38585__$1);
var G__38593 = null;
var G__38594 = 0;
var G__38595 = 0;
seq__38570_38575 = G__38592;
chunk__38571_38576 = G__38593;
count__38572_38577 = G__38594;
i__38573_38578 = G__38595;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__38600_38604 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38601_38605 = null;var count__38602_38606 = 0;var i__38603_38607 = 0;while(true){
if((i__38603_38607 < count__38602_38606))
{var node_38608 = cljs.core._nth.call(null,chunk__38601_38605,i__38603_38607);goog.dom.setTextContent(node_38608,value);
{
var G__38609 = seq__38600_38604;
var G__38610 = chunk__38601_38605;
var G__38611 = count__38602_38606;
var G__38612 = (i__38603_38607 + 1);
seq__38600_38604 = G__38609;
chunk__38601_38605 = G__38610;
count__38602_38606 = G__38611;
i__38603_38607 = G__38612;
continue;
}
} else
{var temp__4092__auto___38613 = cljs.core.seq.call(null,seq__38600_38604);if(temp__4092__auto___38613)
{var seq__38600_38614__$1 = temp__4092__auto___38613;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38600_38614__$1))
{var c__4148__auto___38615 = cljs.core.chunk_first.call(null,seq__38600_38614__$1);{
var G__38616 = cljs.core.chunk_rest.call(null,seq__38600_38614__$1);
var G__38617 = c__4148__auto___38615;
var G__38618 = cljs.core.count.call(null,c__4148__auto___38615);
var G__38619 = 0;
seq__38600_38604 = G__38616;
chunk__38601_38605 = G__38617;
count__38602_38606 = G__38618;
i__38603_38607 = G__38619;
continue;
}
} else
{var node_38620 = cljs.core.first.call(null,seq__38600_38614__$1);goog.dom.setTextContent(node_38620,value);
{
var G__38621 = cljs.core.next.call(null,seq__38600_38614__$1);
var G__38622 = null;
var G__38623 = 0;
var G__38624 = 0;
seq__38600_38604 = G__38621;
chunk__38601_38605 = G__38622;
count__38602_38606 = G__38623;
i__38603_38607 = G__38624;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__38629_38633 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38630_38634 = null;var count__38631_38635 = 0;var i__38632_38636 = 0;while(true){
if((i__38632_38636 < count__38631_38635))
{var node_38637 = cljs.core._nth.call(null,chunk__38630_38634,i__38632_38636);goog.dom.forms.setValue(node_38637,value);
{
var G__38638 = seq__38629_38633;
var G__38639 = chunk__38630_38634;
var G__38640 = count__38631_38635;
var G__38641 = (i__38632_38636 + 1);
seq__38629_38633 = G__38638;
chunk__38630_38634 = G__38639;
count__38631_38635 = G__38640;
i__38632_38636 = G__38641;
continue;
}
} else
{var temp__4092__auto___38642 = cljs.core.seq.call(null,seq__38629_38633);if(temp__4092__auto___38642)
{var seq__38629_38643__$1 = temp__4092__auto___38642;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38629_38643__$1))
{var c__4148__auto___38644 = cljs.core.chunk_first.call(null,seq__38629_38643__$1);{
var G__38645 = cljs.core.chunk_rest.call(null,seq__38629_38643__$1);
var G__38646 = c__4148__auto___38644;
var G__38647 = cljs.core.count.call(null,c__4148__auto___38644);
var G__38648 = 0;
seq__38629_38633 = G__38645;
chunk__38630_38634 = G__38646;
count__38631_38635 = G__38647;
i__38632_38636 = G__38648;
continue;
}
} else
{var node_38649 = cljs.core.first.call(null,seq__38629_38643__$1);goog.dom.forms.setValue(node_38649,value);
{
var G__38650 = cljs.core.next.call(null,seq__38629_38643__$1);
var G__38651 = null;
var G__38652 = 0;
var G__38653 = 0;
seq__38629_38633 = G__38650;
chunk__38630_38634 = G__38651;
count__38631_38635 = G__38652;
i__38632_38636 = G__38653;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_38664 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__38660_38665 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38661_38666 = null;var count__38662_38667 = 0;var i__38663_38668 = 0;while(true){
if((i__38663_38668 < count__38662_38667))
{var node_38669 = cljs.core._nth.call(null,chunk__38661_38666,i__38663_38668);node_38669.innerHTML = value_38664;
{
var G__38670 = seq__38660_38665;
var G__38671 = chunk__38661_38666;
var G__38672 = count__38662_38667;
var G__38673 = (i__38663_38668 + 1);
seq__38660_38665 = G__38670;
chunk__38661_38666 = G__38671;
count__38662_38667 = G__38672;
i__38663_38668 = G__38673;
continue;
}
} else
{var temp__4092__auto___38674 = cljs.core.seq.call(null,seq__38660_38665);if(temp__4092__auto___38674)
{var seq__38660_38675__$1 = temp__4092__auto___38674;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38660_38675__$1))
{var c__4148__auto___38676 = cljs.core.chunk_first.call(null,seq__38660_38675__$1);{
var G__38677 = cljs.core.chunk_rest.call(null,seq__38660_38675__$1);
var G__38678 = c__4148__auto___38676;
var G__38679 = cljs.core.count.call(null,c__4148__auto___38676);
var G__38680 = 0;
seq__38660_38665 = G__38677;
chunk__38661_38666 = G__38678;
count__38662_38667 = G__38679;
i__38663_38668 = G__38680;
continue;
}
} else
{var node_38681 = cljs.core.first.call(null,seq__38660_38675__$1);node_38681.innerHTML = value_38664;
{
var G__38682 = cljs.core.next.call(null,seq__38660_38675__$1);
var G__38683 = null;
var G__38684 = 0;
var G__38685 = 0;
seq__38660_38665 = G__38682;
chunk__38661_38666 = G__38683;
count__38662_38667 = G__38684;
i__38663_38668 = G__38685;
continue;
}
}
} else
{}
}
break;
}
}catch (e38659){if((e38659 instanceof Error))
{var e_38686 = e38659;domina.replace_children_BANG_.call(null,content,value_38664);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38659;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__38693_38697 = cljs.core.seq.call(null,children);var chunk__38694_38698 = null;var count__38695_38699 = 0;var i__38696_38700 = 0;while(true){
if((i__38696_38700 < count__38695_38699))
{var child_38701 = cljs.core._nth.call(null,chunk__38694_38698,i__38696_38700);frag.appendChild(child_38701);
{
var G__38702 = seq__38693_38697;
var G__38703 = chunk__38694_38698;
var G__38704 = count__38695_38699;
var G__38705 = (i__38696_38700 + 1);
seq__38693_38697 = G__38702;
chunk__38694_38698 = G__38703;
count__38695_38699 = G__38704;
i__38696_38700 = G__38705;
continue;
}
} else
{var temp__4092__auto___38706 = cljs.core.seq.call(null,seq__38693_38697);if(temp__4092__auto___38706)
{var seq__38693_38707__$1 = temp__4092__auto___38706;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38693_38707__$1))
{var c__4148__auto___38708 = cljs.core.chunk_first.call(null,seq__38693_38707__$1);{
var G__38709 = cljs.core.chunk_rest.call(null,seq__38693_38707__$1);
var G__38710 = c__4148__auto___38708;
var G__38711 = cljs.core.count.call(null,c__4148__auto___38708);
var G__38712 = 0;
seq__38693_38697 = G__38709;
chunk__38694_38698 = G__38710;
count__38695_38699 = G__38711;
i__38696_38700 = G__38712;
continue;
}
} else
{var child_38713 = cljs.core.first.call(null,seq__38693_38707__$1);frag.appendChild(child_38713);
{
var G__38714 = cljs.core.next.call(null,seq__38693_38707__$1);
var G__38715 = null;
var G__38716 = 0;
var G__38717 = 0;
seq__38693_38697 = G__38714;
chunk__38694_38698 = G__38715;
count__38695_38699 = G__38716;
i__38696_38700 = G__38717;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__38687_SHARP_,p2__38688_SHARP_){return f.call(null,p1__38687_SHARP_,p2__38688_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__38719 = list_thing;if(G__38719)
{var bit__4050__auto__ = (G__38719.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38719.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38719.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38719);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38719);
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
{if((function (){var G__38720 = content;if(G__38720)
{var bit__4050__auto__ = (G__38720.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38720.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38720.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38720);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38720);
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
{if((function (){var G__38721 = content;if(G__38721)
{var bit__4050__auto__ = (G__38721.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38721.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38721.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38721);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38721);
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
