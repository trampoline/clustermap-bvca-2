// Compiled by ClojureScript 0.0-2080
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
var opt_wrapper_19231 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_19232 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_19233 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_19232,table_section_wrapper_19232,opt_wrapper_19231,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_19233,table_section_wrapper_19232,cell_wrapper_19233,opt_wrapper_19231,table_section_wrapper_19232,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_19232]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3279__auto__ = div.firstChild;if(cljs.core.truth_(and__3279__auto__))
{return div.firstChild.childNodes;
} else
{return and__3279__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__19238 = cljs.core.seq.call(null,tbody);var chunk__19239 = null;var count__19240 = 0;var i__19241 = 0;while(true){
if((i__19241 < count__19240))
{var child = cljs.core._nth.call(null,chunk__19239,i__19241);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19242 = seq__19238;
var G__19243 = chunk__19239;
var G__19244 = count__19240;
var G__19245 = (i__19241 + 1);
seq__19238 = G__19242;
chunk__19239 = G__19243;
count__19240 = G__19244;
i__19241 = G__19245;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19238);if(temp__4092__auto__)
{var seq__19238__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19238__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__19238__$1);{
var G__19246 = cljs.core.chunk_rest.call(null,seq__19238__$1);
var G__19247 = c__4015__auto__;
var G__19248 = cljs.core.count.call(null,c__4015__auto__);
var G__19249 = 0;
seq__19238 = G__19246;
chunk__19239 = G__19247;
count__19240 = G__19248;
i__19241 = G__19249;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__19238__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19250 = cljs.core.next.call(null,seq__19238__$1);
var G__19251 = null;
var G__19252 = 0;
var G__19253 = 0;
seq__19238 = G__19250;
chunk__19239 = G__19251;
count__19240 = G__19252;
i__19241 = G__19253;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__19255 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__19255,0,null);var start_wrap = cljs.core.nth.call(null,vec__19255,1,null);var end_wrap = cljs.core.nth.call(null,vec__19255,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__19256 = wrapper.lastChild;
var G__19257 = (level - 1);
wrapper = G__19256;
level = G__19257;
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
if(cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3279__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3279__auto__;
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
domina.DomContent = (function (){var obj19259 = {};return obj19259;
})();
domina.nodes = (function nodes(content){if((function (){var and__3279__auto__ = content;if(and__3279__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3279__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__3894__auto__ = (((content == null))?null:content);return (function (){var or__3291__auto__ = (domina.nodes[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.nodes["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3279__auto__ = nodeseq;if(and__3279__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3279__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__3894__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3291__auto__ = (domina.single_node[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.single_node["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3279__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3279__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3279__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__19260){
var mesg = cljs.core.seq(arglist__19260);
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
log.cljs$lang$applyTo = (function (arglist__19261){
var mesg = cljs.core.seq(arglist__19261);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__19262){
var contents = cljs.core.seq(arglist__19262);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__19263_SHARP_){return p1__19263_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__19264_SHARP_,p2__19265_SHARP_){return goog.dom.insertChildAt(p1__19264_SHARP_,p2__19265_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19267_SHARP_,p2__19266_SHARP_){return goog.dom.insertSiblingBefore(p2__19266_SHARP_,p1__19267_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19269_SHARP_,p2__19268_SHARP_){return goog.dom.insertSiblingAfter(p2__19268_SHARP_,p1__19269_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__19271_SHARP_,p2__19270_SHARP_){return goog.dom.replaceNode(p2__19270_SHARP_,p1__19271_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__19276_19280 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19277_19281 = null;var count__19278_19282 = 0;var i__19279_19283 = 0;while(true){
if((i__19279_19283 < count__19278_19282))
{var n_19284 = cljs.core._nth.call(null,chunk__19277_19281,i__19279_19283);goog.style.setStyle(n_19284,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19285 = seq__19276_19280;
var G__19286 = chunk__19277_19281;
var G__19287 = count__19278_19282;
var G__19288 = (i__19279_19283 + 1);
seq__19276_19280 = G__19285;
chunk__19277_19281 = G__19286;
count__19278_19282 = G__19287;
i__19279_19283 = G__19288;
continue;
}
} else
{var temp__4092__auto___19289 = cljs.core.seq.call(null,seq__19276_19280);if(temp__4092__auto___19289)
{var seq__19276_19290__$1 = temp__4092__auto___19289;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19276_19290__$1))
{var c__4015__auto___19291 = cljs.core.chunk_first.call(null,seq__19276_19290__$1);{
var G__19292 = cljs.core.chunk_rest.call(null,seq__19276_19290__$1);
var G__19293 = c__4015__auto___19291;
var G__19294 = cljs.core.count.call(null,c__4015__auto___19291);
var G__19295 = 0;
seq__19276_19280 = G__19292;
chunk__19277_19281 = G__19293;
count__19278_19282 = G__19294;
i__19279_19283 = G__19295;
continue;
}
} else
{var n_19296 = cljs.core.first.call(null,seq__19276_19290__$1);goog.style.setStyle(n_19296,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19297 = cljs.core.next.call(null,seq__19276_19290__$1);
var G__19298 = null;
var G__19299 = 0;
var G__19300 = 0;
seq__19276_19280 = G__19297;
chunk__19277_19281 = G__19298;
count__19278_19282 = G__19299;
i__19279_19283 = G__19300;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19301){
var content = cljs.core.first(arglist__19301);
arglist__19301 = cljs.core.next(arglist__19301);
var name = cljs.core.first(arglist__19301);
var value = cljs.core.rest(arglist__19301);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__19306_19310 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19307_19311 = null;var count__19308_19312 = 0;var i__19309_19313 = 0;while(true){
if((i__19309_19313 < count__19308_19312))
{var n_19314 = cljs.core._nth.call(null,chunk__19307_19311,i__19309_19313);n_19314.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19315 = seq__19306_19310;
var G__19316 = chunk__19307_19311;
var G__19317 = count__19308_19312;
var G__19318 = (i__19309_19313 + 1);
seq__19306_19310 = G__19315;
chunk__19307_19311 = G__19316;
count__19308_19312 = G__19317;
i__19309_19313 = G__19318;
continue;
}
} else
{var temp__4092__auto___19319 = cljs.core.seq.call(null,seq__19306_19310);if(temp__4092__auto___19319)
{var seq__19306_19320__$1 = temp__4092__auto___19319;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19306_19320__$1))
{var c__4015__auto___19321 = cljs.core.chunk_first.call(null,seq__19306_19320__$1);{
var G__19322 = cljs.core.chunk_rest.call(null,seq__19306_19320__$1);
var G__19323 = c__4015__auto___19321;
var G__19324 = cljs.core.count.call(null,c__4015__auto___19321);
var G__19325 = 0;
seq__19306_19310 = G__19322;
chunk__19307_19311 = G__19323;
count__19308_19312 = G__19324;
i__19309_19313 = G__19325;
continue;
}
} else
{var n_19326 = cljs.core.first.call(null,seq__19306_19320__$1);n_19326.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19327 = cljs.core.next.call(null,seq__19306_19320__$1);
var G__19328 = null;
var G__19329 = 0;
var G__19330 = 0;
seq__19306_19310 = G__19327;
chunk__19307_19311 = G__19328;
count__19308_19312 = G__19329;
i__19309_19313 = G__19330;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19331){
var content = cljs.core.first(arglist__19331);
arglist__19331 = cljs.core.next(arglist__19331);
var name = cljs.core.first(arglist__19331);
var value = cljs.core.rest(arglist__19331);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__19336_19340 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19337_19341 = null;var count__19338_19342 = 0;var i__19339_19343 = 0;while(true){
if((i__19339_19343 < count__19338_19342))
{var n_19344 = cljs.core._nth.call(null,chunk__19337_19341,i__19339_19343);n_19344.removeAttribute(cljs.core.name.call(null,name));
{
var G__19345 = seq__19336_19340;
var G__19346 = chunk__19337_19341;
var G__19347 = count__19338_19342;
var G__19348 = (i__19339_19343 + 1);
seq__19336_19340 = G__19345;
chunk__19337_19341 = G__19346;
count__19338_19342 = G__19347;
i__19339_19343 = G__19348;
continue;
}
} else
{var temp__4092__auto___19349 = cljs.core.seq.call(null,seq__19336_19340);if(temp__4092__auto___19349)
{var seq__19336_19350__$1 = temp__4092__auto___19349;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19336_19350__$1))
{var c__4015__auto___19351 = cljs.core.chunk_first.call(null,seq__19336_19350__$1);{
var G__19352 = cljs.core.chunk_rest.call(null,seq__19336_19350__$1);
var G__19353 = c__4015__auto___19351;
var G__19354 = cljs.core.count.call(null,c__4015__auto___19351);
var G__19355 = 0;
seq__19336_19340 = G__19352;
chunk__19337_19341 = G__19353;
count__19338_19342 = G__19354;
i__19339_19343 = G__19355;
continue;
}
} else
{var n_19356 = cljs.core.first.call(null,seq__19336_19350__$1);n_19356.removeAttribute(cljs.core.name.call(null,name));
{
var G__19357 = cljs.core.next.call(null,seq__19336_19350__$1);
var G__19358 = null;
var G__19359 = 0;
var G__19360 = 0;
seq__19336_19340 = G__19357;
chunk__19337_19341 = G__19358;
count__19338_19342 = G__19359;
i__19339_19343 = G__19360;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__19362 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__19362,0,null);var v = cljs.core.nth.call(null,vec__19362,1,null);if(cljs.core.truth_((function (){var and__3279__auto__ = k;if(cljs.core.truth_(and__3279__auto__))
{return v;
} else
{return and__3279__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__19363_SHARP_){var attr = attrs__$1.item(p1__19363_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__19370_19376 = cljs.core.seq.call(null,styles);var chunk__19371_19377 = null;var count__19372_19378 = 0;var i__19373_19379 = 0;while(true){
if((i__19373_19379 < count__19372_19378))
{var vec__19374_19380 = cljs.core._nth.call(null,chunk__19371_19377,i__19373_19379);var name_19381 = cljs.core.nth.call(null,vec__19374_19380,0,null);var value_19382 = cljs.core.nth.call(null,vec__19374_19380,1,null);domina.set_style_BANG_.call(null,content,name_19381,value_19382);
{
var G__19383 = seq__19370_19376;
var G__19384 = chunk__19371_19377;
var G__19385 = count__19372_19378;
var G__19386 = (i__19373_19379 + 1);
seq__19370_19376 = G__19383;
chunk__19371_19377 = G__19384;
count__19372_19378 = G__19385;
i__19373_19379 = G__19386;
continue;
}
} else
{var temp__4092__auto___19387 = cljs.core.seq.call(null,seq__19370_19376);if(temp__4092__auto___19387)
{var seq__19370_19388__$1 = temp__4092__auto___19387;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19370_19388__$1))
{var c__4015__auto___19389 = cljs.core.chunk_first.call(null,seq__19370_19388__$1);{
var G__19390 = cljs.core.chunk_rest.call(null,seq__19370_19388__$1);
var G__19391 = c__4015__auto___19389;
var G__19392 = cljs.core.count.call(null,c__4015__auto___19389);
var G__19393 = 0;
seq__19370_19376 = G__19390;
chunk__19371_19377 = G__19391;
count__19372_19378 = G__19392;
i__19373_19379 = G__19393;
continue;
}
} else
{var vec__19375_19394 = cljs.core.first.call(null,seq__19370_19388__$1);var name_19395 = cljs.core.nth.call(null,vec__19375_19394,0,null);var value_19396 = cljs.core.nth.call(null,vec__19375_19394,1,null);domina.set_style_BANG_.call(null,content,name_19395,value_19396);
{
var G__19397 = cljs.core.next.call(null,seq__19370_19388__$1);
var G__19398 = null;
var G__19399 = 0;
var G__19400 = 0;
seq__19370_19376 = G__19397;
chunk__19371_19377 = G__19398;
count__19372_19378 = G__19399;
i__19373_19379 = G__19400;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__19407_19413 = cljs.core.seq.call(null,attrs);var chunk__19408_19414 = null;var count__19409_19415 = 0;var i__19410_19416 = 0;while(true){
if((i__19410_19416 < count__19409_19415))
{var vec__19411_19417 = cljs.core._nth.call(null,chunk__19408_19414,i__19410_19416);var name_19418 = cljs.core.nth.call(null,vec__19411_19417,0,null);var value_19419 = cljs.core.nth.call(null,vec__19411_19417,1,null);domina.set_attr_BANG_.call(null,content,name_19418,value_19419);
{
var G__19420 = seq__19407_19413;
var G__19421 = chunk__19408_19414;
var G__19422 = count__19409_19415;
var G__19423 = (i__19410_19416 + 1);
seq__19407_19413 = G__19420;
chunk__19408_19414 = G__19421;
count__19409_19415 = G__19422;
i__19410_19416 = G__19423;
continue;
}
} else
{var temp__4092__auto___19424 = cljs.core.seq.call(null,seq__19407_19413);if(temp__4092__auto___19424)
{var seq__19407_19425__$1 = temp__4092__auto___19424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19407_19425__$1))
{var c__4015__auto___19426 = cljs.core.chunk_first.call(null,seq__19407_19425__$1);{
var G__19427 = cljs.core.chunk_rest.call(null,seq__19407_19425__$1);
var G__19428 = c__4015__auto___19426;
var G__19429 = cljs.core.count.call(null,c__4015__auto___19426);
var G__19430 = 0;
seq__19407_19413 = G__19427;
chunk__19408_19414 = G__19428;
count__19409_19415 = G__19429;
i__19410_19416 = G__19430;
continue;
}
} else
{var vec__19412_19431 = cljs.core.first.call(null,seq__19407_19425__$1);var name_19432 = cljs.core.nth.call(null,vec__19412_19431,0,null);var value_19433 = cljs.core.nth.call(null,vec__19412_19431,1,null);domina.set_attr_BANG_.call(null,content,name_19432,value_19433);
{
var G__19434 = cljs.core.next.call(null,seq__19407_19425__$1);
var G__19435 = null;
var G__19436 = 0;
var G__19437 = 0;
seq__19407_19413 = G__19434;
chunk__19408_19414 = G__19435;
count__19409_19415 = G__19436;
i__19410_19416 = G__19437;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__19442_19446 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19443_19447 = null;var count__19444_19448 = 0;var i__19445_19449 = 0;while(true){
if((i__19445_19449 < count__19444_19448))
{var node_19450 = cljs.core._nth.call(null,chunk__19443_19447,i__19445_19449);goog.dom.classes.add(node_19450,class$);
{
var G__19451 = seq__19442_19446;
var G__19452 = chunk__19443_19447;
var G__19453 = count__19444_19448;
var G__19454 = (i__19445_19449 + 1);
seq__19442_19446 = G__19451;
chunk__19443_19447 = G__19452;
count__19444_19448 = G__19453;
i__19445_19449 = G__19454;
continue;
}
} else
{var temp__4092__auto___19455 = cljs.core.seq.call(null,seq__19442_19446);if(temp__4092__auto___19455)
{var seq__19442_19456__$1 = temp__4092__auto___19455;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19442_19456__$1))
{var c__4015__auto___19457 = cljs.core.chunk_first.call(null,seq__19442_19456__$1);{
var G__19458 = cljs.core.chunk_rest.call(null,seq__19442_19456__$1);
var G__19459 = c__4015__auto___19457;
var G__19460 = cljs.core.count.call(null,c__4015__auto___19457);
var G__19461 = 0;
seq__19442_19446 = G__19458;
chunk__19443_19447 = G__19459;
count__19444_19448 = G__19460;
i__19445_19449 = G__19461;
continue;
}
} else
{var node_19462 = cljs.core.first.call(null,seq__19442_19456__$1);goog.dom.classes.add(node_19462,class$);
{
var G__19463 = cljs.core.next.call(null,seq__19442_19456__$1);
var G__19464 = null;
var G__19465 = 0;
var G__19466 = 0;
seq__19442_19446 = G__19463;
chunk__19443_19447 = G__19464;
count__19444_19448 = G__19465;
i__19445_19449 = G__19466;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__19471_19475 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19472_19476 = null;var count__19473_19477 = 0;var i__19474_19478 = 0;while(true){
if((i__19474_19478 < count__19473_19477))
{var node_19479 = cljs.core._nth.call(null,chunk__19472_19476,i__19474_19478);goog.dom.classes.remove(node_19479,class$);
{
var G__19480 = seq__19471_19475;
var G__19481 = chunk__19472_19476;
var G__19482 = count__19473_19477;
var G__19483 = (i__19474_19478 + 1);
seq__19471_19475 = G__19480;
chunk__19472_19476 = G__19481;
count__19473_19477 = G__19482;
i__19474_19478 = G__19483;
continue;
}
} else
{var temp__4092__auto___19484 = cljs.core.seq.call(null,seq__19471_19475);if(temp__4092__auto___19484)
{var seq__19471_19485__$1 = temp__4092__auto___19484;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19471_19485__$1))
{var c__4015__auto___19486 = cljs.core.chunk_first.call(null,seq__19471_19485__$1);{
var G__19487 = cljs.core.chunk_rest.call(null,seq__19471_19485__$1);
var G__19488 = c__4015__auto___19486;
var G__19489 = cljs.core.count.call(null,c__4015__auto___19486);
var G__19490 = 0;
seq__19471_19475 = G__19487;
chunk__19472_19476 = G__19488;
count__19473_19477 = G__19489;
i__19474_19478 = G__19490;
continue;
}
} else
{var node_19491 = cljs.core.first.call(null,seq__19471_19485__$1);goog.dom.classes.remove(node_19491,class$);
{
var G__19492 = cljs.core.next.call(null,seq__19471_19485__$1);
var G__19493 = null;
var G__19494 = 0;
var G__19495 = 0;
seq__19471_19475 = G__19492;
chunk__19472_19476 = G__19493;
count__19473_19477 = G__19494;
i__19474_19478 = G__19495;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__19500_19504 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19501_19505 = null;var count__19502_19506 = 0;var i__19503_19507 = 0;while(true){
if((i__19503_19507 < count__19502_19506))
{var node_19508 = cljs.core._nth.call(null,chunk__19501_19505,i__19503_19507);goog.dom.classes.toggle(node_19508,class$);
{
var G__19509 = seq__19500_19504;
var G__19510 = chunk__19501_19505;
var G__19511 = count__19502_19506;
var G__19512 = (i__19503_19507 + 1);
seq__19500_19504 = G__19509;
chunk__19501_19505 = G__19510;
count__19502_19506 = G__19511;
i__19503_19507 = G__19512;
continue;
}
} else
{var temp__4092__auto___19513 = cljs.core.seq.call(null,seq__19500_19504);if(temp__4092__auto___19513)
{var seq__19500_19514__$1 = temp__4092__auto___19513;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19500_19514__$1))
{var c__4015__auto___19515 = cljs.core.chunk_first.call(null,seq__19500_19514__$1);{
var G__19516 = cljs.core.chunk_rest.call(null,seq__19500_19514__$1);
var G__19517 = c__4015__auto___19515;
var G__19518 = cljs.core.count.call(null,c__4015__auto___19515);
var G__19519 = 0;
seq__19500_19504 = G__19516;
chunk__19501_19505 = G__19517;
count__19502_19506 = G__19518;
i__19503_19507 = G__19519;
continue;
}
} else
{var node_19520 = cljs.core.first.call(null,seq__19500_19514__$1);goog.dom.classes.toggle(node_19520,class$);
{
var G__19521 = cljs.core.next.call(null,seq__19500_19514__$1);
var G__19522 = null;
var G__19523 = 0;
var G__19524 = 0;
seq__19500_19504 = G__19521;
chunk__19501_19505 = G__19522;
count__19502_19506 = G__19523;
i__19503_19507 = G__19524;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_19533__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__19529_19534 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19530_19535 = null;var count__19531_19536 = 0;var i__19532_19537 = 0;while(true){
if((i__19532_19537 < count__19531_19536))
{var node_19538 = cljs.core._nth.call(null,chunk__19530_19535,i__19532_19537);goog.dom.classes.set(node_19538,classes_19533__$1);
{
var G__19539 = seq__19529_19534;
var G__19540 = chunk__19530_19535;
var G__19541 = count__19531_19536;
var G__19542 = (i__19532_19537 + 1);
seq__19529_19534 = G__19539;
chunk__19530_19535 = G__19540;
count__19531_19536 = G__19541;
i__19532_19537 = G__19542;
continue;
}
} else
{var temp__4092__auto___19543 = cljs.core.seq.call(null,seq__19529_19534);if(temp__4092__auto___19543)
{var seq__19529_19544__$1 = temp__4092__auto___19543;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19529_19544__$1))
{var c__4015__auto___19545 = cljs.core.chunk_first.call(null,seq__19529_19544__$1);{
var G__19546 = cljs.core.chunk_rest.call(null,seq__19529_19544__$1);
var G__19547 = c__4015__auto___19545;
var G__19548 = cljs.core.count.call(null,c__4015__auto___19545);
var G__19549 = 0;
seq__19529_19534 = G__19546;
chunk__19530_19535 = G__19547;
count__19531_19536 = G__19548;
i__19532_19537 = G__19549;
continue;
}
} else
{var node_19550 = cljs.core.first.call(null,seq__19529_19544__$1);goog.dom.classes.set(node_19550,classes_19533__$1);
{
var G__19551 = cljs.core.next.call(null,seq__19529_19544__$1);
var G__19552 = null;
var G__19553 = 0;
var G__19554 = 0;
seq__19529_19534 = G__19551;
chunk__19530_19535 = G__19552;
count__19531_19536 = G__19553;
i__19532_19537 = G__19554;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__19559_19563 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19560_19564 = null;var count__19561_19565 = 0;var i__19562_19566 = 0;while(true){
if((i__19562_19566 < count__19561_19565))
{var node_19567 = cljs.core._nth.call(null,chunk__19560_19564,i__19562_19566);goog.dom.setTextContent(node_19567,value);
{
var G__19568 = seq__19559_19563;
var G__19569 = chunk__19560_19564;
var G__19570 = count__19561_19565;
var G__19571 = (i__19562_19566 + 1);
seq__19559_19563 = G__19568;
chunk__19560_19564 = G__19569;
count__19561_19565 = G__19570;
i__19562_19566 = G__19571;
continue;
}
} else
{var temp__4092__auto___19572 = cljs.core.seq.call(null,seq__19559_19563);if(temp__4092__auto___19572)
{var seq__19559_19573__$1 = temp__4092__auto___19572;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19559_19573__$1))
{var c__4015__auto___19574 = cljs.core.chunk_first.call(null,seq__19559_19573__$1);{
var G__19575 = cljs.core.chunk_rest.call(null,seq__19559_19573__$1);
var G__19576 = c__4015__auto___19574;
var G__19577 = cljs.core.count.call(null,c__4015__auto___19574);
var G__19578 = 0;
seq__19559_19563 = G__19575;
chunk__19560_19564 = G__19576;
count__19561_19565 = G__19577;
i__19562_19566 = G__19578;
continue;
}
} else
{var node_19579 = cljs.core.first.call(null,seq__19559_19573__$1);goog.dom.setTextContent(node_19579,value);
{
var G__19580 = cljs.core.next.call(null,seq__19559_19573__$1);
var G__19581 = null;
var G__19582 = 0;
var G__19583 = 0;
seq__19559_19563 = G__19580;
chunk__19560_19564 = G__19581;
count__19561_19565 = G__19582;
i__19562_19566 = G__19583;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__19588_19592 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19589_19593 = null;var count__19590_19594 = 0;var i__19591_19595 = 0;while(true){
if((i__19591_19595 < count__19590_19594))
{var node_19596 = cljs.core._nth.call(null,chunk__19589_19593,i__19591_19595);goog.dom.forms.setValue(node_19596,value);
{
var G__19597 = seq__19588_19592;
var G__19598 = chunk__19589_19593;
var G__19599 = count__19590_19594;
var G__19600 = (i__19591_19595 + 1);
seq__19588_19592 = G__19597;
chunk__19589_19593 = G__19598;
count__19590_19594 = G__19599;
i__19591_19595 = G__19600;
continue;
}
} else
{var temp__4092__auto___19601 = cljs.core.seq.call(null,seq__19588_19592);if(temp__4092__auto___19601)
{var seq__19588_19602__$1 = temp__4092__auto___19601;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19588_19602__$1))
{var c__4015__auto___19603 = cljs.core.chunk_first.call(null,seq__19588_19602__$1);{
var G__19604 = cljs.core.chunk_rest.call(null,seq__19588_19602__$1);
var G__19605 = c__4015__auto___19603;
var G__19606 = cljs.core.count.call(null,c__4015__auto___19603);
var G__19607 = 0;
seq__19588_19592 = G__19604;
chunk__19589_19593 = G__19605;
count__19590_19594 = G__19606;
i__19591_19595 = G__19607;
continue;
}
} else
{var node_19608 = cljs.core.first.call(null,seq__19588_19602__$1);goog.dom.forms.setValue(node_19608,value);
{
var G__19609 = cljs.core.next.call(null,seq__19588_19602__$1);
var G__19610 = null;
var G__19611 = 0;
var G__19612 = 0;
seq__19588_19592 = G__19609;
chunk__19589_19593 = G__19610;
count__19590_19594 = G__19611;
i__19591_19595 = G__19612;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3279__auto__ = allows_inner_html_QMARK_;if(and__3279__auto__)
{var and__3279__auto____$1 = (function (){var or__3291__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3279__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})()))
{var value_19623 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__19619_19624 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19620_19625 = null;var count__19621_19626 = 0;var i__19622_19627 = 0;while(true){
if((i__19622_19627 < count__19621_19626))
{var node_19628 = cljs.core._nth.call(null,chunk__19620_19625,i__19622_19627);node_19628.innerHTML = value_19623;
{
var G__19629 = seq__19619_19624;
var G__19630 = chunk__19620_19625;
var G__19631 = count__19621_19626;
var G__19632 = (i__19622_19627 + 1);
seq__19619_19624 = G__19629;
chunk__19620_19625 = G__19630;
count__19621_19626 = G__19631;
i__19622_19627 = G__19632;
continue;
}
} else
{var temp__4092__auto___19633 = cljs.core.seq.call(null,seq__19619_19624);if(temp__4092__auto___19633)
{var seq__19619_19634__$1 = temp__4092__auto___19633;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19619_19634__$1))
{var c__4015__auto___19635 = cljs.core.chunk_first.call(null,seq__19619_19634__$1);{
var G__19636 = cljs.core.chunk_rest.call(null,seq__19619_19634__$1);
var G__19637 = c__4015__auto___19635;
var G__19638 = cljs.core.count.call(null,c__4015__auto___19635);
var G__19639 = 0;
seq__19619_19624 = G__19636;
chunk__19620_19625 = G__19637;
count__19621_19626 = G__19638;
i__19622_19627 = G__19639;
continue;
}
} else
{var node_19640 = cljs.core.first.call(null,seq__19619_19634__$1);node_19640.innerHTML = value_19623;
{
var G__19641 = cljs.core.next.call(null,seq__19619_19634__$1);
var G__19642 = null;
var G__19643 = 0;
var G__19644 = 0;
seq__19619_19624 = G__19641;
chunk__19620_19625 = G__19642;
count__19621_19626 = G__19643;
i__19622_19627 = G__19644;
continue;
}
}
} else
{}
}
break;
}
}catch (e19618){if((e19618 instanceof Error))
{var e_19645 = e19618;domina.replace_children_BANG_.call(null,content,value_19623);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19618;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3279__auto__ = bubble;if(cljs.core.truth_(and__3279__auto__))
{return (value == null);
} else
{return and__3279__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3291__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__19652_19656 = cljs.core.seq.call(null,children);var chunk__19653_19657 = null;var count__19654_19658 = 0;var i__19655_19659 = 0;while(true){
if((i__19655_19659 < count__19654_19658))
{var child_19660 = cljs.core._nth.call(null,chunk__19653_19657,i__19655_19659);frag.appendChild(child_19660);
{
var G__19661 = seq__19652_19656;
var G__19662 = chunk__19653_19657;
var G__19663 = count__19654_19658;
var G__19664 = (i__19655_19659 + 1);
seq__19652_19656 = G__19661;
chunk__19653_19657 = G__19662;
count__19654_19658 = G__19663;
i__19655_19659 = G__19664;
continue;
}
} else
{var temp__4092__auto___19665 = cljs.core.seq.call(null,seq__19652_19656);if(temp__4092__auto___19665)
{var seq__19652_19666__$1 = temp__4092__auto___19665;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19652_19666__$1))
{var c__4015__auto___19667 = cljs.core.chunk_first.call(null,seq__19652_19666__$1);{
var G__19668 = cljs.core.chunk_rest.call(null,seq__19652_19666__$1);
var G__19669 = c__4015__auto___19667;
var G__19670 = cljs.core.count.call(null,c__4015__auto___19667);
var G__19671 = 0;
seq__19652_19656 = G__19668;
chunk__19653_19657 = G__19669;
count__19654_19658 = G__19670;
i__19655_19659 = G__19671;
continue;
}
} else
{var child_19672 = cljs.core.first.call(null,seq__19652_19666__$1);frag.appendChild(child_19672);
{
var G__19673 = cljs.core.next.call(null,seq__19652_19666__$1);
var G__19674 = null;
var G__19675 = 0;
var G__19676 = 0;
seq__19652_19656 = G__19673;
chunk__19653_19657 = G__19674;
count__19654_19658 = G__19675;
i__19655_19659 = G__19676;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__19646_SHARP_,p2__19647_SHARP_){return f.call(null,p1__19646_SHARP_,p2__19647_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3279__auto__ = obj;if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3279__auto____$1)
{return obj.length;
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
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
{if((function (){var G__19678 = list_thing;if(G__19678)
{var bit__3917__auto__ = (G__19678.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__19678.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19678.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19678);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19678);
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
{if((function (){var G__19679 = content;if(G__19679)
{var bit__3917__auto__ = (G__19679.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__19679.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19679.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19679);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19679);
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
{if((function (){var G__19680 = content;if(G__19680)
{var bit__3917__auto__ = (G__19680.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__19680.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19680.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19680);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19680);
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

//# sourceMappingURL=domina.js.map