// Compiled by ClojureScript 0.0-2322
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_19245 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_19246 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_19247 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_19247,opt_wrapper_19245,table_section_wrapper_19246,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_19245,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_19246,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_19246,cell_wrapper_19247,table_section_wrapper_19246,table_section_wrapper_19246]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__19252 = cljs.core.seq.call(null,tbody);var chunk__19253 = null;var count__19254 = (0);var i__19255 = (0);while(true){
if((i__19255 < count__19254))
{var child = cljs.core._nth.call(null,chunk__19253,i__19255);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19256 = seq__19252;
var G__19257 = chunk__19253;
var G__19258 = count__19254;
var G__19259 = (i__19255 + (1));
seq__19252 = G__19256;
chunk__19253 = G__19257;
count__19254 = G__19258;
i__19255 = G__19259;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19252);if(temp__4126__auto__)
{var seq__19252__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19252__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__19252__$1);{
var G__19260 = cljs.core.chunk_rest.call(null,seq__19252__$1);
var G__19261 = c__4314__auto__;
var G__19262 = cljs.core.count.call(null,c__4314__auto__);
var G__19263 = (0);
seq__19252 = G__19260;
chunk__19253 = G__19261;
count__19254 = G__19262;
i__19255 = G__19263;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__19252__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19264 = cljs.core.next.call(null,seq__19252__$1);
var G__19265 = null;
var G__19266 = (0);
var G__19267 = (0);
seq__19252 = G__19264;
chunk__19253 = G__19265;
count__19254 = G__19266;
i__19255 = G__19267;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__19269 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__19269,(0),null);var start_wrap = cljs.core.nth.call(null,vec__19269,(1),null);var end_wrap = cljs.core.nth.call(null,vec__19269,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__19270 = wrapper.lastChild;
var G__19271 = (level - (1));
wrapper = G__19270;
level = G__19271;
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
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
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
domina.DomContent = (function (){var obj19273 = {};return obj19273;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__19274){
var mesg = cljs.core.seq(arglist__19274);
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
log.cljs$lang$applyTo = (function (arglist__19275){
var mesg = cljs.core.seq(arglist__19275);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__19276){
var contents = cljs.core.seq(arglist__19276);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__19277_SHARP_){return p1__19277_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__19278_SHARP_,p2__19279_SHARP_){return goog.dom.insertChildAt(p1__19278_SHARP_,p2__19279_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19281_SHARP_,p2__19280_SHARP_){return goog.dom.insertSiblingBefore(p2__19280_SHARP_,p1__19281_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19283_SHARP_,p2__19282_SHARP_){return goog.dom.insertSiblingAfter(p2__19282_SHARP_,p1__19283_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__19285_SHARP_,p2__19284_SHARP_){return goog.dom.replaceNode(p2__19284_SHARP_,p1__19285_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__19290_19294 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19291_19295 = null;var count__19292_19296 = (0);var i__19293_19297 = (0);while(true){
if((i__19293_19297 < count__19292_19296))
{var n_19298 = cljs.core._nth.call(null,chunk__19291_19295,i__19293_19297);goog.style.setStyle(n_19298,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19299 = seq__19290_19294;
var G__19300 = chunk__19291_19295;
var G__19301 = count__19292_19296;
var G__19302 = (i__19293_19297 + (1));
seq__19290_19294 = G__19299;
chunk__19291_19295 = G__19300;
count__19292_19296 = G__19301;
i__19293_19297 = G__19302;
continue;
}
} else
{var temp__4126__auto___19303 = cljs.core.seq.call(null,seq__19290_19294);if(temp__4126__auto___19303)
{var seq__19290_19304__$1 = temp__4126__auto___19303;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19290_19304__$1))
{var c__4314__auto___19305 = cljs.core.chunk_first.call(null,seq__19290_19304__$1);{
var G__19306 = cljs.core.chunk_rest.call(null,seq__19290_19304__$1);
var G__19307 = c__4314__auto___19305;
var G__19308 = cljs.core.count.call(null,c__4314__auto___19305);
var G__19309 = (0);
seq__19290_19294 = G__19306;
chunk__19291_19295 = G__19307;
count__19292_19296 = G__19308;
i__19293_19297 = G__19309;
continue;
}
} else
{var n_19310 = cljs.core.first.call(null,seq__19290_19304__$1);goog.style.setStyle(n_19310,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19311 = cljs.core.next.call(null,seq__19290_19304__$1);
var G__19312 = null;
var G__19313 = (0);
var G__19314 = (0);
seq__19290_19294 = G__19311;
chunk__19291_19295 = G__19312;
count__19292_19296 = G__19313;
i__19293_19297 = G__19314;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19315){
var content = cljs.core.first(arglist__19315);
arglist__19315 = cljs.core.next(arglist__19315);
var name = cljs.core.first(arglist__19315);
var value = cljs.core.rest(arglist__19315);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__19320_19324 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19321_19325 = null;var count__19322_19326 = (0);var i__19323_19327 = (0);while(true){
if((i__19323_19327 < count__19322_19326))
{var n_19328 = cljs.core._nth.call(null,chunk__19321_19325,i__19323_19327);n_19328.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19329 = seq__19320_19324;
var G__19330 = chunk__19321_19325;
var G__19331 = count__19322_19326;
var G__19332 = (i__19323_19327 + (1));
seq__19320_19324 = G__19329;
chunk__19321_19325 = G__19330;
count__19322_19326 = G__19331;
i__19323_19327 = G__19332;
continue;
}
} else
{var temp__4126__auto___19333 = cljs.core.seq.call(null,seq__19320_19324);if(temp__4126__auto___19333)
{var seq__19320_19334__$1 = temp__4126__auto___19333;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19320_19334__$1))
{var c__4314__auto___19335 = cljs.core.chunk_first.call(null,seq__19320_19334__$1);{
var G__19336 = cljs.core.chunk_rest.call(null,seq__19320_19334__$1);
var G__19337 = c__4314__auto___19335;
var G__19338 = cljs.core.count.call(null,c__4314__auto___19335);
var G__19339 = (0);
seq__19320_19324 = G__19336;
chunk__19321_19325 = G__19337;
count__19322_19326 = G__19338;
i__19323_19327 = G__19339;
continue;
}
} else
{var n_19340 = cljs.core.first.call(null,seq__19320_19334__$1);n_19340.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19341 = cljs.core.next.call(null,seq__19320_19334__$1);
var G__19342 = null;
var G__19343 = (0);
var G__19344 = (0);
seq__19320_19324 = G__19341;
chunk__19321_19325 = G__19342;
count__19322_19326 = G__19343;
i__19323_19327 = G__19344;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19345){
var content = cljs.core.first(arglist__19345);
arglist__19345 = cljs.core.next(arglist__19345);
var name = cljs.core.first(arglist__19345);
var value = cljs.core.rest(arglist__19345);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__19350_19354 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19351_19355 = null;var count__19352_19356 = (0);var i__19353_19357 = (0);while(true){
if((i__19353_19357 < count__19352_19356))
{var n_19358 = cljs.core._nth.call(null,chunk__19351_19355,i__19353_19357);n_19358.removeAttribute(cljs.core.name.call(null,name));
{
var G__19359 = seq__19350_19354;
var G__19360 = chunk__19351_19355;
var G__19361 = count__19352_19356;
var G__19362 = (i__19353_19357 + (1));
seq__19350_19354 = G__19359;
chunk__19351_19355 = G__19360;
count__19352_19356 = G__19361;
i__19353_19357 = G__19362;
continue;
}
} else
{var temp__4126__auto___19363 = cljs.core.seq.call(null,seq__19350_19354);if(temp__4126__auto___19363)
{var seq__19350_19364__$1 = temp__4126__auto___19363;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19350_19364__$1))
{var c__4314__auto___19365 = cljs.core.chunk_first.call(null,seq__19350_19364__$1);{
var G__19366 = cljs.core.chunk_rest.call(null,seq__19350_19364__$1);
var G__19367 = c__4314__auto___19365;
var G__19368 = cljs.core.count.call(null,c__4314__auto___19365);
var G__19369 = (0);
seq__19350_19354 = G__19366;
chunk__19351_19355 = G__19367;
count__19352_19356 = G__19368;
i__19353_19357 = G__19369;
continue;
}
} else
{var n_19370 = cljs.core.first.call(null,seq__19350_19364__$1);n_19370.removeAttribute(cljs.core.name.call(null,name));
{
var G__19371 = cljs.core.next.call(null,seq__19350_19364__$1);
var G__19372 = null;
var G__19373 = (0);
var G__19374 = (0);
seq__19350_19354 = G__19371;
chunk__19351_19355 = G__19372;
count__19352_19356 = G__19373;
i__19353_19357 = G__19374;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__19376 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__19376,(0),null);var v = cljs.core.nth.call(null,vec__19376,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
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
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__19377_SHARP_){var attr = attrs__$1.item(p1__19377_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__19384_19390 = cljs.core.seq.call(null,styles);var chunk__19385_19391 = null;var count__19386_19392 = (0);var i__19387_19393 = (0);while(true){
if((i__19387_19393 < count__19386_19392))
{var vec__19388_19394 = cljs.core._nth.call(null,chunk__19385_19391,i__19387_19393);var name_19395 = cljs.core.nth.call(null,vec__19388_19394,(0),null);var value_19396 = cljs.core.nth.call(null,vec__19388_19394,(1),null);domina.set_style_BANG_.call(null,content,name_19395,value_19396);
{
var G__19397 = seq__19384_19390;
var G__19398 = chunk__19385_19391;
var G__19399 = count__19386_19392;
var G__19400 = (i__19387_19393 + (1));
seq__19384_19390 = G__19397;
chunk__19385_19391 = G__19398;
count__19386_19392 = G__19399;
i__19387_19393 = G__19400;
continue;
}
} else
{var temp__4126__auto___19401 = cljs.core.seq.call(null,seq__19384_19390);if(temp__4126__auto___19401)
{var seq__19384_19402__$1 = temp__4126__auto___19401;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19384_19402__$1))
{var c__4314__auto___19403 = cljs.core.chunk_first.call(null,seq__19384_19402__$1);{
var G__19404 = cljs.core.chunk_rest.call(null,seq__19384_19402__$1);
var G__19405 = c__4314__auto___19403;
var G__19406 = cljs.core.count.call(null,c__4314__auto___19403);
var G__19407 = (0);
seq__19384_19390 = G__19404;
chunk__19385_19391 = G__19405;
count__19386_19392 = G__19406;
i__19387_19393 = G__19407;
continue;
}
} else
{var vec__19389_19408 = cljs.core.first.call(null,seq__19384_19402__$1);var name_19409 = cljs.core.nth.call(null,vec__19389_19408,(0),null);var value_19410 = cljs.core.nth.call(null,vec__19389_19408,(1),null);domina.set_style_BANG_.call(null,content,name_19409,value_19410);
{
var G__19411 = cljs.core.next.call(null,seq__19384_19402__$1);
var G__19412 = null;
var G__19413 = (0);
var G__19414 = (0);
seq__19384_19390 = G__19411;
chunk__19385_19391 = G__19412;
count__19386_19392 = G__19413;
i__19387_19393 = G__19414;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__19421_19427 = cljs.core.seq.call(null,attrs);var chunk__19422_19428 = null;var count__19423_19429 = (0);var i__19424_19430 = (0);while(true){
if((i__19424_19430 < count__19423_19429))
{var vec__19425_19431 = cljs.core._nth.call(null,chunk__19422_19428,i__19424_19430);var name_19432 = cljs.core.nth.call(null,vec__19425_19431,(0),null);var value_19433 = cljs.core.nth.call(null,vec__19425_19431,(1),null);domina.set_attr_BANG_.call(null,content,name_19432,value_19433);
{
var G__19434 = seq__19421_19427;
var G__19435 = chunk__19422_19428;
var G__19436 = count__19423_19429;
var G__19437 = (i__19424_19430 + (1));
seq__19421_19427 = G__19434;
chunk__19422_19428 = G__19435;
count__19423_19429 = G__19436;
i__19424_19430 = G__19437;
continue;
}
} else
{var temp__4126__auto___19438 = cljs.core.seq.call(null,seq__19421_19427);if(temp__4126__auto___19438)
{var seq__19421_19439__$1 = temp__4126__auto___19438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19421_19439__$1))
{var c__4314__auto___19440 = cljs.core.chunk_first.call(null,seq__19421_19439__$1);{
var G__19441 = cljs.core.chunk_rest.call(null,seq__19421_19439__$1);
var G__19442 = c__4314__auto___19440;
var G__19443 = cljs.core.count.call(null,c__4314__auto___19440);
var G__19444 = (0);
seq__19421_19427 = G__19441;
chunk__19422_19428 = G__19442;
count__19423_19429 = G__19443;
i__19424_19430 = G__19444;
continue;
}
} else
{var vec__19426_19445 = cljs.core.first.call(null,seq__19421_19439__$1);var name_19446 = cljs.core.nth.call(null,vec__19426_19445,(0),null);var value_19447 = cljs.core.nth.call(null,vec__19426_19445,(1),null);domina.set_attr_BANG_.call(null,content,name_19446,value_19447);
{
var G__19448 = cljs.core.next.call(null,seq__19421_19439__$1);
var G__19449 = null;
var G__19450 = (0);
var G__19451 = (0);
seq__19421_19427 = G__19448;
chunk__19422_19428 = G__19449;
count__19423_19429 = G__19450;
i__19424_19430 = G__19451;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__19456_19460 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19457_19461 = null;var count__19458_19462 = (0);var i__19459_19463 = (0);while(true){
if((i__19459_19463 < count__19458_19462))
{var node_19464 = cljs.core._nth.call(null,chunk__19457_19461,i__19459_19463);goog.dom.classes.add(node_19464,class$);
{
var G__19465 = seq__19456_19460;
var G__19466 = chunk__19457_19461;
var G__19467 = count__19458_19462;
var G__19468 = (i__19459_19463 + (1));
seq__19456_19460 = G__19465;
chunk__19457_19461 = G__19466;
count__19458_19462 = G__19467;
i__19459_19463 = G__19468;
continue;
}
} else
{var temp__4126__auto___19469 = cljs.core.seq.call(null,seq__19456_19460);if(temp__4126__auto___19469)
{var seq__19456_19470__$1 = temp__4126__auto___19469;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19456_19470__$1))
{var c__4314__auto___19471 = cljs.core.chunk_first.call(null,seq__19456_19470__$1);{
var G__19472 = cljs.core.chunk_rest.call(null,seq__19456_19470__$1);
var G__19473 = c__4314__auto___19471;
var G__19474 = cljs.core.count.call(null,c__4314__auto___19471);
var G__19475 = (0);
seq__19456_19460 = G__19472;
chunk__19457_19461 = G__19473;
count__19458_19462 = G__19474;
i__19459_19463 = G__19475;
continue;
}
} else
{var node_19476 = cljs.core.first.call(null,seq__19456_19470__$1);goog.dom.classes.add(node_19476,class$);
{
var G__19477 = cljs.core.next.call(null,seq__19456_19470__$1);
var G__19478 = null;
var G__19479 = (0);
var G__19480 = (0);
seq__19456_19460 = G__19477;
chunk__19457_19461 = G__19478;
count__19458_19462 = G__19479;
i__19459_19463 = G__19480;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__19485_19489 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19486_19490 = null;var count__19487_19491 = (0);var i__19488_19492 = (0);while(true){
if((i__19488_19492 < count__19487_19491))
{var node_19493 = cljs.core._nth.call(null,chunk__19486_19490,i__19488_19492);goog.dom.classes.remove(node_19493,class$);
{
var G__19494 = seq__19485_19489;
var G__19495 = chunk__19486_19490;
var G__19496 = count__19487_19491;
var G__19497 = (i__19488_19492 + (1));
seq__19485_19489 = G__19494;
chunk__19486_19490 = G__19495;
count__19487_19491 = G__19496;
i__19488_19492 = G__19497;
continue;
}
} else
{var temp__4126__auto___19498 = cljs.core.seq.call(null,seq__19485_19489);if(temp__4126__auto___19498)
{var seq__19485_19499__$1 = temp__4126__auto___19498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19485_19499__$1))
{var c__4314__auto___19500 = cljs.core.chunk_first.call(null,seq__19485_19499__$1);{
var G__19501 = cljs.core.chunk_rest.call(null,seq__19485_19499__$1);
var G__19502 = c__4314__auto___19500;
var G__19503 = cljs.core.count.call(null,c__4314__auto___19500);
var G__19504 = (0);
seq__19485_19489 = G__19501;
chunk__19486_19490 = G__19502;
count__19487_19491 = G__19503;
i__19488_19492 = G__19504;
continue;
}
} else
{var node_19505 = cljs.core.first.call(null,seq__19485_19499__$1);goog.dom.classes.remove(node_19505,class$);
{
var G__19506 = cljs.core.next.call(null,seq__19485_19499__$1);
var G__19507 = null;
var G__19508 = (0);
var G__19509 = (0);
seq__19485_19489 = G__19506;
chunk__19486_19490 = G__19507;
count__19487_19491 = G__19508;
i__19488_19492 = G__19509;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__19514_19518 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19515_19519 = null;var count__19516_19520 = (0);var i__19517_19521 = (0);while(true){
if((i__19517_19521 < count__19516_19520))
{var node_19522 = cljs.core._nth.call(null,chunk__19515_19519,i__19517_19521);goog.dom.classes.toggle(node_19522,class$);
{
var G__19523 = seq__19514_19518;
var G__19524 = chunk__19515_19519;
var G__19525 = count__19516_19520;
var G__19526 = (i__19517_19521 + (1));
seq__19514_19518 = G__19523;
chunk__19515_19519 = G__19524;
count__19516_19520 = G__19525;
i__19517_19521 = G__19526;
continue;
}
} else
{var temp__4126__auto___19527 = cljs.core.seq.call(null,seq__19514_19518);if(temp__4126__auto___19527)
{var seq__19514_19528__$1 = temp__4126__auto___19527;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19514_19528__$1))
{var c__4314__auto___19529 = cljs.core.chunk_first.call(null,seq__19514_19528__$1);{
var G__19530 = cljs.core.chunk_rest.call(null,seq__19514_19528__$1);
var G__19531 = c__4314__auto___19529;
var G__19532 = cljs.core.count.call(null,c__4314__auto___19529);
var G__19533 = (0);
seq__19514_19518 = G__19530;
chunk__19515_19519 = G__19531;
count__19516_19520 = G__19532;
i__19517_19521 = G__19533;
continue;
}
} else
{var node_19534 = cljs.core.first.call(null,seq__19514_19528__$1);goog.dom.classes.toggle(node_19534,class$);
{
var G__19535 = cljs.core.next.call(null,seq__19514_19528__$1);
var G__19536 = null;
var G__19537 = (0);
var G__19538 = (0);
seq__19514_19518 = G__19535;
chunk__19515_19519 = G__19536;
count__19516_19520 = G__19537;
i__19517_19521 = G__19538;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_19547__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__19543_19548 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19544_19549 = null;var count__19545_19550 = (0);var i__19546_19551 = (0);while(true){
if((i__19546_19551 < count__19545_19550))
{var node_19552 = cljs.core._nth.call(null,chunk__19544_19549,i__19546_19551);goog.dom.classes.set(node_19552,classes_19547__$1);
{
var G__19553 = seq__19543_19548;
var G__19554 = chunk__19544_19549;
var G__19555 = count__19545_19550;
var G__19556 = (i__19546_19551 + (1));
seq__19543_19548 = G__19553;
chunk__19544_19549 = G__19554;
count__19545_19550 = G__19555;
i__19546_19551 = G__19556;
continue;
}
} else
{var temp__4126__auto___19557 = cljs.core.seq.call(null,seq__19543_19548);if(temp__4126__auto___19557)
{var seq__19543_19558__$1 = temp__4126__auto___19557;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19543_19558__$1))
{var c__4314__auto___19559 = cljs.core.chunk_first.call(null,seq__19543_19558__$1);{
var G__19560 = cljs.core.chunk_rest.call(null,seq__19543_19558__$1);
var G__19561 = c__4314__auto___19559;
var G__19562 = cljs.core.count.call(null,c__4314__auto___19559);
var G__19563 = (0);
seq__19543_19548 = G__19560;
chunk__19544_19549 = G__19561;
count__19545_19550 = G__19562;
i__19546_19551 = G__19563;
continue;
}
} else
{var node_19564 = cljs.core.first.call(null,seq__19543_19558__$1);goog.dom.classes.set(node_19564,classes_19547__$1);
{
var G__19565 = cljs.core.next.call(null,seq__19543_19558__$1);
var G__19566 = null;
var G__19567 = (0);
var G__19568 = (0);
seq__19543_19548 = G__19565;
chunk__19544_19549 = G__19566;
count__19545_19550 = G__19567;
i__19546_19551 = G__19568;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__19573_19577 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19574_19578 = null;var count__19575_19579 = (0);var i__19576_19580 = (0);while(true){
if((i__19576_19580 < count__19575_19579))
{var node_19581 = cljs.core._nth.call(null,chunk__19574_19578,i__19576_19580);goog.dom.setTextContent(node_19581,value);
{
var G__19582 = seq__19573_19577;
var G__19583 = chunk__19574_19578;
var G__19584 = count__19575_19579;
var G__19585 = (i__19576_19580 + (1));
seq__19573_19577 = G__19582;
chunk__19574_19578 = G__19583;
count__19575_19579 = G__19584;
i__19576_19580 = G__19585;
continue;
}
} else
{var temp__4126__auto___19586 = cljs.core.seq.call(null,seq__19573_19577);if(temp__4126__auto___19586)
{var seq__19573_19587__$1 = temp__4126__auto___19586;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19573_19587__$1))
{var c__4314__auto___19588 = cljs.core.chunk_first.call(null,seq__19573_19587__$1);{
var G__19589 = cljs.core.chunk_rest.call(null,seq__19573_19587__$1);
var G__19590 = c__4314__auto___19588;
var G__19591 = cljs.core.count.call(null,c__4314__auto___19588);
var G__19592 = (0);
seq__19573_19577 = G__19589;
chunk__19574_19578 = G__19590;
count__19575_19579 = G__19591;
i__19576_19580 = G__19592;
continue;
}
} else
{var node_19593 = cljs.core.first.call(null,seq__19573_19587__$1);goog.dom.setTextContent(node_19593,value);
{
var G__19594 = cljs.core.next.call(null,seq__19573_19587__$1);
var G__19595 = null;
var G__19596 = (0);
var G__19597 = (0);
seq__19573_19577 = G__19594;
chunk__19574_19578 = G__19595;
count__19575_19579 = G__19596;
i__19576_19580 = G__19597;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__19602_19606 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19603_19607 = null;var count__19604_19608 = (0);var i__19605_19609 = (0);while(true){
if((i__19605_19609 < count__19604_19608))
{var node_19610 = cljs.core._nth.call(null,chunk__19603_19607,i__19605_19609);goog.dom.forms.setValue(node_19610,value);
{
var G__19611 = seq__19602_19606;
var G__19612 = chunk__19603_19607;
var G__19613 = count__19604_19608;
var G__19614 = (i__19605_19609 + (1));
seq__19602_19606 = G__19611;
chunk__19603_19607 = G__19612;
count__19604_19608 = G__19613;
i__19605_19609 = G__19614;
continue;
}
} else
{var temp__4126__auto___19615 = cljs.core.seq.call(null,seq__19602_19606);if(temp__4126__auto___19615)
{var seq__19602_19616__$1 = temp__4126__auto___19615;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19602_19616__$1))
{var c__4314__auto___19617 = cljs.core.chunk_first.call(null,seq__19602_19616__$1);{
var G__19618 = cljs.core.chunk_rest.call(null,seq__19602_19616__$1);
var G__19619 = c__4314__auto___19617;
var G__19620 = cljs.core.count.call(null,c__4314__auto___19617);
var G__19621 = (0);
seq__19602_19606 = G__19618;
chunk__19603_19607 = G__19619;
count__19604_19608 = G__19620;
i__19605_19609 = G__19621;
continue;
}
} else
{var node_19622 = cljs.core.first.call(null,seq__19602_19616__$1);goog.dom.forms.setValue(node_19622,value);
{
var G__19623 = cljs.core.next.call(null,seq__19602_19616__$1);
var G__19624 = null;
var G__19625 = (0);
var G__19626 = (0);
seq__19602_19606 = G__19623;
chunk__19603_19607 = G__19624;
count__19604_19608 = G__19625;
i__19605_19609 = G__19626;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_19637 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__19633_19638 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19634_19639 = null;var count__19635_19640 = (0);var i__19636_19641 = (0);while(true){
if((i__19636_19641 < count__19635_19640))
{var node_19642 = cljs.core._nth.call(null,chunk__19634_19639,i__19636_19641);node_19642.innerHTML = value_19637;
{
var G__19643 = seq__19633_19638;
var G__19644 = chunk__19634_19639;
var G__19645 = count__19635_19640;
var G__19646 = (i__19636_19641 + (1));
seq__19633_19638 = G__19643;
chunk__19634_19639 = G__19644;
count__19635_19640 = G__19645;
i__19636_19641 = G__19646;
continue;
}
} else
{var temp__4126__auto___19647 = cljs.core.seq.call(null,seq__19633_19638);if(temp__4126__auto___19647)
{var seq__19633_19648__$1 = temp__4126__auto___19647;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19633_19648__$1))
{var c__4314__auto___19649 = cljs.core.chunk_first.call(null,seq__19633_19648__$1);{
var G__19650 = cljs.core.chunk_rest.call(null,seq__19633_19648__$1);
var G__19651 = c__4314__auto___19649;
var G__19652 = cljs.core.count.call(null,c__4314__auto___19649);
var G__19653 = (0);
seq__19633_19638 = G__19650;
chunk__19634_19639 = G__19651;
count__19635_19640 = G__19652;
i__19636_19641 = G__19653;
continue;
}
} else
{var node_19654 = cljs.core.first.call(null,seq__19633_19648__$1);node_19654.innerHTML = value_19637;
{
var G__19655 = cljs.core.next.call(null,seq__19633_19648__$1);
var G__19656 = null;
var G__19657 = (0);
var G__19658 = (0);
seq__19633_19638 = G__19655;
chunk__19634_19639 = G__19656;
count__19635_19640 = G__19657;
i__19636_19641 = G__19658;
continue;
}
}
} else
{}
}
break;
}
}catch (e19632){if((e19632 instanceof Error))
{var e_19659 = e19632;domina.replace_children_BANG_.call(null,content,value_19637);
} else
{throw e19632;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__19666_19670 = cljs.core.seq.call(null,children);var chunk__19667_19671 = null;var count__19668_19672 = (0);var i__19669_19673 = (0);while(true){
if((i__19669_19673 < count__19668_19672))
{var child_19674 = cljs.core._nth.call(null,chunk__19667_19671,i__19669_19673);frag.appendChild(child_19674);
{
var G__19675 = seq__19666_19670;
var G__19676 = chunk__19667_19671;
var G__19677 = count__19668_19672;
var G__19678 = (i__19669_19673 + (1));
seq__19666_19670 = G__19675;
chunk__19667_19671 = G__19676;
count__19668_19672 = G__19677;
i__19669_19673 = G__19678;
continue;
}
} else
{var temp__4126__auto___19679 = cljs.core.seq.call(null,seq__19666_19670);if(temp__4126__auto___19679)
{var seq__19666_19680__$1 = temp__4126__auto___19679;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19666_19680__$1))
{var c__4314__auto___19681 = cljs.core.chunk_first.call(null,seq__19666_19680__$1);{
var G__19682 = cljs.core.chunk_rest.call(null,seq__19666_19680__$1);
var G__19683 = c__4314__auto___19681;
var G__19684 = cljs.core.count.call(null,c__4314__auto___19681);
var G__19685 = (0);
seq__19666_19670 = G__19682;
chunk__19667_19671 = G__19683;
count__19668_19672 = G__19684;
i__19669_19673 = G__19685;
continue;
}
} else
{var child_19686 = cljs.core.first.call(null,seq__19666_19680__$1);frag.appendChild(child_19686);
{
var G__19687 = cljs.core.next.call(null,seq__19666_19680__$1);
var G__19688 = null;
var G__19689 = (0);
var G__19690 = (0);
seq__19666_19670 = G__19687;
chunk__19667_19671 = G__19688;
count__19668_19672 = G__19689;
i__19669_19673 = G__19690;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__19660_SHARP_,p2__19661_SHARP_){return f.call(null,p1__19660_SHARP_,p2__19661_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
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
{if((function (){var G__19692 = list_thing;if(G__19692)
{var bit__4208__auto__ = (G__19692.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__19692.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19692.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19692);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19692);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__19693 = content;if(G__19693)
{var bit__4208__auto__ = (G__19693.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__19693.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19693.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19693);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19693);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__19694 = content;if(G__19694)
{var bit__4208__auto__ = (G__19694.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__19694.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19694.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19694);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19694);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

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