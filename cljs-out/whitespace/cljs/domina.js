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
var opt_wrapper_38266 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_38267 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_38268 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_38267,table_section_wrapper_38267,opt_wrapper_38266,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_38268,table_section_wrapper_38267,cell_wrapper_38268,opt_wrapper_38266,table_section_wrapper_38267,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_38267]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__38273 = cljs.core.seq.call(null,tbody);var chunk__38274 = null;var count__38275 = 0;var i__38276 = 0;while(true){
if((i__38276 < count__38275))
{var child = cljs.core._nth.call(null,chunk__38274,i__38276);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__38277 = seq__38273;
var G__38278 = chunk__38274;
var G__38279 = count__38275;
var G__38280 = (i__38276 + 1);
seq__38273 = G__38277;
chunk__38274 = G__38278;
count__38275 = G__38279;
i__38276 = G__38280;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38273);if(temp__4092__auto__)
{var seq__38273__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38273__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38273__$1);{
var G__38281 = cljs.core.chunk_rest.call(null,seq__38273__$1);
var G__38282 = c__4148__auto__;
var G__38283 = cljs.core.count.call(null,c__4148__auto__);
var G__38284 = 0;
seq__38273 = G__38281;
chunk__38274 = G__38282;
count__38275 = G__38283;
i__38276 = G__38284;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__38273__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__38285 = cljs.core.next.call(null,seq__38273__$1);
var G__38286 = null;
var G__38287 = 0;
var G__38288 = 0;
seq__38273 = G__38285;
chunk__38274 = G__38286;
count__38275 = G__38287;
i__38276 = G__38288;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__38290 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__38290,0,null);var start_wrap = cljs.core.nth.call(null,vec__38290,1,null);var end_wrap = cljs.core.nth.call(null,vec__38290,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__38291 = wrapper.lastChild;
var G__38292 = (level - 1);
wrapper = G__38291;
level = G__38292;
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
domina.DomContent = (function (){var obj38294 = {};return obj38294;
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
log_debug.cljs$lang$applyTo = (function (arglist__38295){
var mesg = cljs.core.seq(arglist__38295);
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
log.cljs$lang$applyTo = (function (arglist__38296){
var mesg = cljs.core.seq(arglist__38296);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__38297){
var contents = cljs.core.seq(arglist__38297);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__38298_SHARP_){return p1__38298_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__38299_SHARP_,p2__38300_SHARP_){return goog.dom.insertChildAt(p1__38299_SHARP_,p2__38300_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__38302_SHARP_,p2__38301_SHARP_){return goog.dom.insertSiblingBefore(p2__38301_SHARP_,p1__38302_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__38304_SHARP_,p2__38303_SHARP_){return goog.dom.insertSiblingAfter(p2__38303_SHARP_,p1__38304_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__38306_SHARP_,p2__38305_SHARP_){return goog.dom.replaceNode(p2__38305_SHARP_,p1__38306_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__38311_38315 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38312_38316 = null;var count__38313_38317 = 0;var i__38314_38318 = 0;while(true){
if((i__38314_38318 < count__38313_38317))
{var n_38319 = cljs.core._nth.call(null,chunk__38312_38316,i__38314_38318);goog.style.setStyle(n_38319,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38320 = seq__38311_38315;
var G__38321 = chunk__38312_38316;
var G__38322 = count__38313_38317;
var G__38323 = (i__38314_38318 + 1);
seq__38311_38315 = G__38320;
chunk__38312_38316 = G__38321;
count__38313_38317 = G__38322;
i__38314_38318 = G__38323;
continue;
}
} else
{var temp__4092__auto___38324 = cljs.core.seq.call(null,seq__38311_38315);if(temp__4092__auto___38324)
{var seq__38311_38325__$1 = temp__4092__auto___38324;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38311_38325__$1))
{var c__4148__auto___38326 = cljs.core.chunk_first.call(null,seq__38311_38325__$1);{
var G__38327 = cljs.core.chunk_rest.call(null,seq__38311_38325__$1);
var G__38328 = c__4148__auto___38326;
var G__38329 = cljs.core.count.call(null,c__4148__auto___38326);
var G__38330 = 0;
seq__38311_38315 = G__38327;
chunk__38312_38316 = G__38328;
count__38313_38317 = G__38329;
i__38314_38318 = G__38330;
continue;
}
} else
{var n_38331 = cljs.core.first.call(null,seq__38311_38325__$1);goog.style.setStyle(n_38331,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38332 = cljs.core.next.call(null,seq__38311_38325__$1);
var G__38333 = null;
var G__38334 = 0;
var G__38335 = 0;
seq__38311_38315 = G__38332;
chunk__38312_38316 = G__38333;
count__38313_38317 = G__38334;
i__38314_38318 = G__38335;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__38336){
var content = cljs.core.first(arglist__38336);
arglist__38336 = cljs.core.next(arglist__38336);
var name = cljs.core.first(arglist__38336);
var value = cljs.core.rest(arglist__38336);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__38341_38345 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38342_38346 = null;var count__38343_38347 = 0;var i__38344_38348 = 0;while(true){
if((i__38344_38348 < count__38343_38347))
{var n_38349 = cljs.core._nth.call(null,chunk__38342_38346,i__38344_38348);n_38349.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38350 = seq__38341_38345;
var G__38351 = chunk__38342_38346;
var G__38352 = count__38343_38347;
var G__38353 = (i__38344_38348 + 1);
seq__38341_38345 = G__38350;
chunk__38342_38346 = G__38351;
count__38343_38347 = G__38352;
i__38344_38348 = G__38353;
continue;
}
} else
{var temp__4092__auto___38354 = cljs.core.seq.call(null,seq__38341_38345);if(temp__4092__auto___38354)
{var seq__38341_38355__$1 = temp__4092__auto___38354;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38341_38355__$1))
{var c__4148__auto___38356 = cljs.core.chunk_first.call(null,seq__38341_38355__$1);{
var G__38357 = cljs.core.chunk_rest.call(null,seq__38341_38355__$1);
var G__38358 = c__4148__auto___38356;
var G__38359 = cljs.core.count.call(null,c__4148__auto___38356);
var G__38360 = 0;
seq__38341_38345 = G__38357;
chunk__38342_38346 = G__38358;
count__38343_38347 = G__38359;
i__38344_38348 = G__38360;
continue;
}
} else
{var n_38361 = cljs.core.first.call(null,seq__38341_38355__$1);n_38361.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38362 = cljs.core.next.call(null,seq__38341_38355__$1);
var G__38363 = null;
var G__38364 = 0;
var G__38365 = 0;
seq__38341_38345 = G__38362;
chunk__38342_38346 = G__38363;
count__38343_38347 = G__38364;
i__38344_38348 = G__38365;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__38366){
var content = cljs.core.first(arglist__38366);
arglist__38366 = cljs.core.next(arglist__38366);
var name = cljs.core.first(arglist__38366);
var value = cljs.core.rest(arglist__38366);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__38371_38375 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38372_38376 = null;var count__38373_38377 = 0;var i__38374_38378 = 0;while(true){
if((i__38374_38378 < count__38373_38377))
{var n_38379 = cljs.core._nth.call(null,chunk__38372_38376,i__38374_38378);n_38379.removeAttribute(cljs.core.name.call(null,name));
{
var G__38380 = seq__38371_38375;
var G__38381 = chunk__38372_38376;
var G__38382 = count__38373_38377;
var G__38383 = (i__38374_38378 + 1);
seq__38371_38375 = G__38380;
chunk__38372_38376 = G__38381;
count__38373_38377 = G__38382;
i__38374_38378 = G__38383;
continue;
}
} else
{var temp__4092__auto___38384 = cljs.core.seq.call(null,seq__38371_38375);if(temp__4092__auto___38384)
{var seq__38371_38385__$1 = temp__4092__auto___38384;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38371_38385__$1))
{var c__4148__auto___38386 = cljs.core.chunk_first.call(null,seq__38371_38385__$1);{
var G__38387 = cljs.core.chunk_rest.call(null,seq__38371_38385__$1);
var G__38388 = c__4148__auto___38386;
var G__38389 = cljs.core.count.call(null,c__4148__auto___38386);
var G__38390 = 0;
seq__38371_38375 = G__38387;
chunk__38372_38376 = G__38388;
count__38373_38377 = G__38389;
i__38374_38378 = G__38390;
continue;
}
} else
{var n_38391 = cljs.core.first.call(null,seq__38371_38385__$1);n_38391.removeAttribute(cljs.core.name.call(null,name));
{
var G__38392 = cljs.core.next.call(null,seq__38371_38385__$1);
var G__38393 = null;
var G__38394 = 0;
var G__38395 = 0;
seq__38371_38375 = G__38392;
chunk__38372_38376 = G__38393;
count__38373_38377 = G__38394;
i__38374_38378 = G__38395;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__38397 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__38397,0,null);var v = cljs.core.nth.call(null,vec__38397,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__38398_SHARP_){var attr = attrs__$1.item(p1__38398_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__38405_38411 = cljs.core.seq.call(null,styles);var chunk__38406_38412 = null;var count__38407_38413 = 0;var i__38408_38414 = 0;while(true){
if((i__38408_38414 < count__38407_38413))
{var vec__38409_38415 = cljs.core._nth.call(null,chunk__38406_38412,i__38408_38414);var name_38416 = cljs.core.nth.call(null,vec__38409_38415,0,null);var value_38417 = cljs.core.nth.call(null,vec__38409_38415,1,null);domina.set_style_BANG_.call(null,content,name_38416,value_38417);
{
var G__38418 = seq__38405_38411;
var G__38419 = chunk__38406_38412;
var G__38420 = count__38407_38413;
var G__38421 = (i__38408_38414 + 1);
seq__38405_38411 = G__38418;
chunk__38406_38412 = G__38419;
count__38407_38413 = G__38420;
i__38408_38414 = G__38421;
continue;
}
} else
{var temp__4092__auto___38422 = cljs.core.seq.call(null,seq__38405_38411);if(temp__4092__auto___38422)
{var seq__38405_38423__$1 = temp__4092__auto___38422;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38405_38423__$1))
{var c__4148__auto___38424 = cljs.core.chunk_first.call(null,seq__38405_38423__$1);{
var G__38425 = cljs.core.chunk_rest.call(null,seq__38405_38423__$1);
var G__38426 = c__4148__auto___38424;
var G__38427 = cljs.core.count.call(null,c__4148__auto___38424);
var G__38428 = 0;
seq__38405_38411 = G__38425;
chunk__38406_38412 = G__38426;
count__38407_38413 = G__38427;
i__38408_38414 = G__38428;
continue;
}
} else
{var vec__38410_38429 = cljs.core.first.call(null,seq__38405_38423__$1);var name_38430 = cljs.core.nth.call(null,vec__38410_38429,0,null);var value_38431 = cljs.core.nth.call(null,vec__38410_38429,1,null);domina.set_style_BANG_.call(null,content,name_38430,value_38431);
{
var G__38432 = cljs.core.next.call(null,seq__38405_38423__$1);
var G__38433 = null;
var G__38434 = 0;
var G__38435 = 0;
seq__38405_38411 = G__38432;
chunk__38406_38412 = G__38433;
count__38407_38413 = G__38434;
i__38408_38414 = G__38435;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__38442_38448 = cljs.core.seq.call(null,attrs);var chunk__38443_38449 = null;var count__38444_38450 = 0;var i__38445_38451 = 0;while(true){
if((i__38445_38451 < count__38444_38450))
{var vec__38446_38452 = cljs.core._nth.call(null,chunk__38443_38449,i__38445_38451);var name_38453 = cljs.core.nth.call(null,vec__38446_38452,0,null);var value_38454 = cljs.core.nth.call(null,vec__38446_38452,1,null);domina.set_attr_BANG_.call(null,content,name_38453,value_38454);
{
var G__38455 = seq__38442_38448;
var G__38456 = chunk__38443_38449;
var G__38457 = count__38444_38450;
var G__38458 = (i__38445_38451 + 1);
seq__38442_38448 = G__38455;
chunk__38443_38449 = G__38456;
count__38444_38450 = G__38457;
i__38445_38451 = G__38458;
continue;
}
} else
{var temp__4092__auto___38459 = cljs.core.seq.call(null,seq__38442_38448);if(temp__4092__auto___38459)
{var seq__38442_38460__$1 = temp__4092__auto___38459;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38442_38460__$1))
{var c__4148__auto___38461 = cljs.core.chunk_first.call(null,seq__38442_38460__$1);{
var G__38462 = cljs.core.chunk_rest.call(null,seq__38442_38460__$1);
var G__38463 = c__4148__auto___38461;
var G__38464 = cljs.core.count.call(null,c__4148__auto___38461);
var G__38465 = 0;
seq__38442_38448 = G__38462;
chunk__38443_38449 = G__38463;
count__38444_38450 = G__38464;
i__38445_38451 = G__38465;
continue;
}
} else
{var vec__38447_38466 = cljs.core.first.call(null,seq__38442_38460__$1);var name_38467 = cljs.core.nth.call(null,vec__38447_38466,0,null);var value_38468 = cljs.core.nth.call(null,vec__38447_38466,1,null);domina.set_attr_BANG_.call(null,content,name_38467,value_38468);
{
var G__38469 = cljs.core.next.call(null,seq__38442_38460__$1);
var G__38470 = null;
var G__38471 = 0;
var G__38472 = 0;
seq__38442_38448 = G__38469;
chunk__38443_38449 = G__38470;
count__38444_38450 = G__38471;
i__38445_38451 = G__38472;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__38477_38481 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38478_38482 = null;var count__38479_38483 = 0;var i__38480_38484 = 0;while(true){
if((i__38480_38484 < count__38479_38483))
{var node_38485 = cljs.core._nth.call(null,chunk__38478_38482,i__38480_38484);goog.dom.classes.add(node_38485,class$);
{
var G__38486 = seq__38477_38481;
var G__38487 = chunk__38478_38482;
var G__38488 = count__38479_38483;
var G__38489 = (i__38480_38484 + 1);
seq__38477_38481 = G__38486;
chunk__38478_38482 = G__38487;
count__38479_38483 = G__38488;
i__38480_38484 = G__38489;
continue;
}
} else
{var temp__4092__auto___38490 = cljs.core.seq.call(null,seq__38477_38481);if(temp__4092__auto___38490)
{var seq__38477_38491__$1 = temp__4092__auto___38490;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38477_38491__$1))
{var c__4148__auto___38492 = cljs.core.chunk_first.call(null,seq__38477_38491__$1);{
var G__38493 = cljs.core.chunk_rest.call(null,seq__38477_38491__$1);
var G__38494 = c__4148__auto___38492;
var G__38495 = cljs.core.count.call(null,c__4148__auto___38492);
var G__38496 = 0;
seq__38477_38481 = G__38493;
chunk__38478_38482 = G__38494;
count__38479_38483 = G__38495;
i__38480_38484 = G__38496;
continue;
}
} else
{var node_38497 = cljs.core.first.call(null,seq__38477_38491__$1);goog.dom.classes.add(node_38497,class$);
{
var G__38498 = cljs.core.next.call(null,seq__38477_38491__$1);
var G__38499 = null;
var G__38500 = 0;
var G__38501 = 0;
seq__38477_38481 = G__38498;
chunk__38478_38482 = G__38499;
count__38479_38483 = G__38500;
i__38480_38484 = G__38501;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__38506_38510 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38507_38511 = null;var count__38508_38512 = 0;var i__38509_38513 = 0;while(true){
if((i__38509_38513 < count__38508_38512))
{var node_38514 = cljs.core._nth.call(null,chunk__38507_38511,i__38509_38513);goog.dom.classes.remove(node_38514,class$);
{
var G__38515 = seq__38506_38510;
var G__38516 = chunk__38507_38511;
var G__38517 = count__38508_38512;
var G__38518 = (i__38509_38513 + 1);
seq__38506_38510 = G__38515;
chunk__38507_38511 = G__38516;
count__38508_38512 = G__38517;
i__38509_38513 = G__38518;
continue;
}
} else
{var temp__4092__auto___38519 = cljs.core.seq.call(null,seq__38506_38510);if(temp__4092__auto___38519)
{var seq__38506_38520__$1 = temp__4092__auto___38519;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38506_38520__$1))
{var c__4148__auto___38521 = cljs.core.chunk_first.call(null,seq__38506_38520__$1);{
var G__38522 = cljs.core.chunk_rest.call(null,seq__38506_38520__$1);
var G__38523 = c__4148__auto___38521;
var G__38524 = cljs.core.count.call(null,c__4148__auto___38521);
var G__38525 = 0;
seq__38506_38510 = G__38522;
chunk__38507_38511 = G__38523;
count__38508_38512 = G__38524;
i__38509_38513 = G__38525;
continue;
}
} else
{var node_38526 = cljs.core.first.call(null,seq__38506_38520__$1);goog.dom.classes.remove(node_38526,class$);
{
var G__38527 = cljs.core.next.call(null,seq__38506_38520__$1);
var G__38528 = null;
var G__38529 = 0;
var G__38530 = 0;
seq__38506_38510 = G__38527;
chunk__38507_38511 = G__38528;
count__38508_38512 = G__38529;
i__38509_38513 = G__38530;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__38535_38539 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38536_38540 = null;var count__38537_38541 = 0;var i__38538_38542 = 0;while(true){
if((i__38538_38542 < count__38537_38541))
{var node_38543 = cljs.core._nth.call(null,chunk__38536_38540,i__38538_38542);goog.dom.classes.toggle(node_38543,class$);
{
var G__38544 = seq__38535_38539;
var G__38545 = chunk__38536_38540;
var G__38546 = count__38537_38541;
var G__38547 = (i__38538_38542 + 1);
seq__38535_38539 = G__38544;
chunk__38536_38540 = G__38545;
count__38537_38541 = G__38546;
i__38538_38542 = G__38547;
continue;
}
} else
{var temp__4092__auto___38548 = cljs.core.seq.call(null,seq__38535_38539);if(temp__4092__auto___38548)
{var seq__38535_38549__$1 = temp__4092__auto___38548;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38535_38549__$1))
{var c__4148__auto___38550 = cljs.core.chunk_first.call(null,seq__38535_38549__$1);{
var G__38551 = cljs.core.chunk_rest.call(null,seq__38535_38549__$1);
var G__38552 = c__4148__auto___38550;
var G__38553 = cljs.core.count.call(null,c__4148__auto___38550);
var G__38554 = 0;
seq__38535_38539 = G__38551;
chunk__38536_38540 = G__38552;
count__38537_38541 = G__38553;
i__38538_38542 = G__38554;
continue;
}
} else
{var node_38555 = cljs.core.first.call(null,seq__38535_38549__$1);goog.dom.classes.toggle(node_38555,class$);
{
var G__38556 = cljs.core.next.call(null,seq__38535_38549__$1);
var G__38557 = null;
var G__38558 = 0;
var G__38559 = 0;
seq__38535_38539 = G__38556;
chunk__38536_38540 = G__38557;
count__38537_38541 = G__38558;
i__38538_38542 = G__38559;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_38568__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__38564_38569 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38565_38570 = null;var count__38566_38571 = 0;var i__38567_38572 = 0;while(true){
if((i__38567_38572 < count__38566_38571))
{var node_38573 = cljs.core._nth.call(null,chunk__38565_38570,i__38567_38572);goog.dom.classes.set(node_38573,classes_38568__$1);
{
var G__38574 = seq__38564_38569;
var G__38575 = chunk__38565_38570;
var G__38576 = count__38566_38571;
var G__38577 = (i__38567_38572 + 1);
seq__38564_38569 = G__38574;
chunk__38565_38570 = G__38575;
count__38566_38571 = G__38576;
i__38567_38572 = G__38577;
continue;
}
} else
{var temp__4092__auto___38578 = cljs.core.seq.call(null,seq__38564_38569);if(temp__4092__auto___38578)
{var seq__38564_38579__$1 = temp__4092__auto___38578;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38564_38579__$1))
{var c__4148__auto___38580 = cljs.core.chunk_first.call(null,seq__38564_38579__$1);{
var G__38581 = cljs.core.chunk_rest.call(null,seq__38564_38579__$1);
var G__38582 = c__4148__auto___38580;
var G__38583 = cljs.core.count.call(null,c__4148__auto___38580);
var G__38584 = 0;
seq__38564_38569 = G__38581;
chunk__38565_38570 = G__38582;
count__38566_38571 = G__38583;
i__38567_38572 = G__38584;
continue;
}
} else
{var node_38585 = cljs.core.first.call(null,seq__38564_38579__$1);goog.dom.classes.set(node_38585,classes_38568__$1);
{
var G__38586 = cljs.core.next.call(null,seq__38564_38579__$1);
var G__38587 = null;
var G__38588 = 0;
var G__38589 = 0;
seq__38564_38569 = G__38586;
chunk__38565_38570 = G__38587;
count__38566_38571 = G__38588;
i__38567_38572 = G__38589;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__38594_38598 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38595_38599 = null;var count__38596_38600 = 0;var i__38597_38601 = 0;while(true){
if((i__38597_38601 < count__38596_38600))
{var node_38602 = cljs.core._nth.call(null,chunk__38595_38599,i__38597_38601);goog.dom.setTextContent(node_38602,value);
{
var G__38603 = seq__38594_38598;
var G__38604 = chunk__38595_38599;
var G__38605 = count__38596_38600;
var G__38606 = (i__38597_38601 + 1);
seq__38594_38598 = G__38603;
chunk__38595_38599 = G__38604;
count__38596_38600 = G__38605;
i__38597_38601 = G__38606;
continue;
}
} else
{var temp__4092__auto___38607 = cljs.core.seq.call(null,seq__38594_38598);if(temp__4092__auto___38607)
{var seq__38594_38608__$1 = temp__4092__auto___38607;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38594_38608__$1))
{var c__4148__auto___38609 = cljs.core.chunk_first.call(null,seq__38594_38608__$1);{
var G__38610 = cljs.core.chunk_rest.call(null,seq__38594_38608__$1);
var G__38611 = c__4148__auto___38609;
var G__38612 = cljs.core.count.call(null,c__4148__auto___38609);
var G__38613 = 0;
seq__38594_38598 = G__38610;
chunk__38595_38599 = G__38611;
count__38596_38600 = G__38612;
i__38597_38601 = G__38613;
continue;
}
} else
{var node_38614 = cljs.core.first.call(null,seq__38594_38608__$1);goog.dom.setTextContent(node_38614,value);
{
var G__38615 = cljs.core.next.call(null,seq__38594_38608__$1);
var G__38616 = null;
var G__38617 = 0;
var G__38618 = 0;
seq__38594_38598 = G__38615;
chunk__38595_38599 = G__38616;
count__38596_38600 = G__38617;
i__38597_38601 = G__38618;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__38623_38627 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38624_38628 = null;var count__38625_38629 = 0;var i__38626_38630 = 0;while(true){
if((i__38626_38630 < count__38625_38629))
{var node_38631 = cljs.core._nth.call(null,chunk__38624_38628,i__38626_38630);goog.dom.forms.setValue(node_38631,value);
{
var G__38632 = seq__38623_38627;
var G__38633 = chunk__38624_38628;
var G__38634 = count__38625_38629;
var G__38635 = (i__38626_38630 + 1);
seq__38623_38627 = G__38632;
chunk__38624_38628 = G__38633;
count__38625_38629 = G__38634;
i__38626_38630 = G__38635;
continue;
}
} else
{var temp__4092__auto___38636 = cljs.core.seq.call(null,seq__38623_38627);if(temp__4092__auto___38636)
{var seq__38623_38637__$1 = temp__4092__auto___38636;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38623_38637__$1))
{var c__4148__auto___38638 = cljs.core.chunk_first.call(null,seq__38623_38637__$1);{
var G__38639 = cljs.core.chunk_rest.call(null,seq__38623_38637__$1);
var G__38640 = c__4148__auto___38638;
var G__38641 = cljs.core.count.call(null,c__4148__auto___38638);
var G__38642 = 0;
seq__38623_38627 = G__38639;
chunk__38624_38628 = G__38640;
count__38625_38629 = G__38641;
i__38626_38630 = G__38642;
continue;
}
} else
{var node_38643 = cljs.core.first.call(null,seq__38623_38637__$1);goog.dom.forms.setValue(node_38643,value);
{
var G__38644 = cljs.core.next.call(null,seq__38623_38637__$1);
var G__38645 = null;
var G__38646 = 0;
var G__38647 = 0;
seq__38623_38627 = G__38644;
chunk__38624_38628 = G__38645;
count__38625_38629 = G__38646;
i__38626_38630 = G__38647;
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
{var value_38658 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__38654_38659 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38655_38660 = null;var count__38656_38661 = 0;var i__38657_38662 = 0;while(true){
if((i__38657_38662 < count__38656_38661))
{var node_38663 = cljs.core._nth.call(null,chunk__38655_38660,i__38657_38662);node_38663.innerHTML = value_38658;
{
var G__38664 = seq__38654_38659;
var G__38665 = chunk__38655_38660;
var G__38666 = count__38656_38661;
var G__38667 = (i__38657_38662 + 1);
seq__38654_38659 = G__38664;
chunk__38655_38660 = G__38665;
count__38656_38661 = G__38666;
i__38657_38662 = G__38667;
continue;
}
} else
{var temp__4092__auto___38668 = cljs.core.seq.call(null,seq__38654_38659);if(temp__4092__auto___38668)
{var seq__38654_38669__$1 = temp__4092__auto___38668;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38654_38669__$1))
{var c__4148__auto___38670 = cljs.core.chunk_first.call(null,seq__38654_38669__$1);{
var G__38671 = cljs.core.chunk_rest.call(null,seq__38654_38669__$1);
var G__38672 = c__4148__auto___38670;
var G__38673 = cljs.core.count.call(null,c__4148__auto___38670);
var G__38674 = 0;
seq__38654_38659 = G__38671;
chunk__38655_38660 = G__38672;
count__38656_38661 = G__38673;
i__38657_38662 = G__38674;
continue;
}
} else
{var node_38675 = cljs.core.first.call(null,seq__38654_38669__$1);node_38675.innerHTML = value_38658;
{
var G__38676 = cljs.core.next.call(null,seq__38654_38669__$1);
var G__38677 = null;
var G__38678 = 0;
var G__38679 = 0;
seq__38654_38659 = G__38676;
chunk__38655_38660 = G__38677;
count__38656_38661 = G__38678;
i__38657_38662 = G__38679;
continue;
}
}
} else
{}
}
break;
}
}catch (e38653){if((e38653 instanceof Error))
{var e_38680 = e38653;domina.replace_children_BANG_.call(null,content,value_38658);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38653;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__38687_38691 = cljs.core.seq.call(null,children);var chunk__38688_38692 = null;var count__38689_38693 = 0;var i__38690_38694 = 0;while(true){
if((i__38690_38694 < count__38689_38693))
{var child_38695 = cljs.core._nth.call(null,chunk__38688_38692,i__38690_38694);frag.appendChild(child_38695);
{
var G__38696 = seq__38687_38691;
var G__38697 = chunk__38688_38692;
var G__38698 = count__38689_38693;
var G__38699 = (i__38690_38694 + 1);
seq__38687_38691 = G__38696;
chunk__38688_38692 = G__38697;
count__38689_38693 = G__38698;
i__38690_38694 = G__38699;
continue;
}
} else
{var temp__4092__auto___38700 = cljs.core.seq.call(null,seq__38687_38691);if(temp__4092__auto___38700)
{var seq__38687_38701__$1 = temp__4092__auto___38700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38687_38701__$1))
{var c__4148__auto___38702 = cljs.core.chunk_first.call(null,seq__38687_38701__$1);{
var G__38703 = cljs.core.chunk_rest.call(null,seq__38687_38701__$1);
var G__38704 = c__4148__auto___38702;
var G__38705 = cljs.core.count.call(null,c__4148__auto___38702);
var G__38706 = 0;
seq__38687_38691 = G__38703;
chunk__38688_38692 = G__38704;
count__38689_38693 = G__38705;
i__38690_38694 = G__38706;
continue;
}
} else
{var child_38707 = cljs.core.first.call(null,seq__38687_38701__$1);frag.appendChild(child_38707);
{
var G__38708 = cljs.core.next.call(null,seq__38687_38701__$1);
var G__38709 = null;
var G__38710 = 0;
var G__38711 = 0;
seq__38687_38691 = G__38708;
chunk__38688_38692 = G__38709;
count__38689_38693 = G__38710;
i__38690_38694 = G__38711;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__38681_SHARP_,p2__38682_SHARP_){return f.call(null,p1__38681_SHARP_,p2__38682_SHARP_);
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
{if((function (){var G__38713 = list_thing;if(G__38713)
{var bit__4050__auto__ = (G__38713.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38713.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38713.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38713);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38713);
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
{if((function (){var G__38714 = content;if(G__38714)
{var bit__4050__auto__ = (G__38714.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38714.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38714.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38714);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38714);
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
{if((function (){var G__38715 = content;if(G__38715)
{var bit__4050__auto__ = (G__38715.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38715.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38715.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38715);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38715);
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
