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
var opt_wrapper_24127 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_24128 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_24129 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_24129,opt_wrapper_24127,table_section_wrapper_24128,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_24127,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_24128,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_24128,cell_wrapper_24129,table_section_wrapper_24128,table_section_wrapper_24128]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__24134 = cljs.core.seq.call(null,tbody);var chunk__24135 = null;var count__24136 = (0);var i__24137 = (0);while(true){
if((i__24137 < count__24136))
{var child = cljs.core._nth.call(null,chunk__24135,i__24137);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__24138 = seq__24134;
var G__24139 = chunk__24135;
var G__24140 = count__24136;
var G__24141 = (i__24137 + (1));
seq__24134 = G__24138;
chunk__24135 = G__24139;
count__24136 = G__24140;
i__24137 = G__24141;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24134);if(temp__4126__auto__)
{var seq__24134__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24134__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__24134__$1);{
var G__24142 = cljs.core.chunk_rest.call(null,seq__24134__$1);
var G__24143 = c__4314__auto__;
var G__24144 = cljs.core.count.call(null,c__4314__auto__);
var G__24145 = (0);
seq__24134 = G__24142;
chunk__24135 = G__24143;
count__24136 = G__24144;
i__24137 = G__24145;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__24134__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__24146 = cljs.core.next.call(null,seq__24134__$1);
var G__24147 = null;
var G__24148 = (0);
var G__24149 = (0);
seq__24134 = G__24146;
chunk__24135 = G__24147;
count__24136 = G__24148;
i__24137 = G__24149;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__24151 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__24151,(0),null);var start_wrap = cljs.core.nth.call(null,vec__24151,(1),null);var end_wrap = cljs.core.nth.call(null,vec__24151,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__24152 = wrapper.lastChild;
var G__24153 = (level - (1));
wrapper = G__24152;
level = G__24153;
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
domina.DomContent = (function (){var obj24155 = {};return obj24155;
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
log_debug.cljs$lang$applyTo = (function (arglist__24156){
var mesg = cljs.core.seq(arglist__24156);
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
log.cljs$lang$applyTo = (function (arglist__24157){
var mesg = cljs.core.seq(arglist__24157);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__24158){
var contents = cljs.core.seq(arglist__24158);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__24159_SHARP_){return p1__24159_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__24160_SHARP_,p2__24161_SHARP_){return goog.dom.insertChildAt(p1__24160_SHARP_,p2__24161_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__24163_SHARP_,p2__24162_SHARP_){return goog.dom.insertSiblingBefore(p2__24162_SHARP_,p1__24163_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__24165_SHARP_,p2__24164_SHARP_){return goog.dom.insertSiblingAfter(p2__24164_SHARP_,p1__24165_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__24167_SHARP_,p2__24166_SHARP_){return goog.dom.replaceNode(p2__24166_SHARP_,p1__24167_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__24172_24176 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24173_24177 = null;var count__24174_24178 = (0);var i__24175_24179 = (0);while(true){
if((i__24175_24179 < count__24174_24178))
{var n_24180 = cljs.core._nth.call(null,chunk__24173_24177,i__24175_24179);goog.style.setStyle(n_24180,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__24181 = seq__24172_24176;
var G__24182 = chunk__24173_24177;
var G__24183 = count__24174_24178;
var G__24184 = (i__24175_24179 + (1));
seq__24172_24176 = G__24181;
chunk__24173_24177 = G__24182;
count__24174_24178 = G__24183;
i__24175_24179 = G__24184;
continue;
}
} else
{var temp__4126__auto___24185 = cljs.core.seq.call(null,seq__24172_24176);if(temp__4126__auto___24185)
{var seq__24172_24186__$1 = temp__4126__auto___24185;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24172_24186__$1))
{var c__4314__auto___24187 = cljs.core.chunk_first.call(null,seq__24172_24186__$1);{
var G__24188 = cljs.core.chunk_rest.call(null,seq__24172_24186__$1);
var G__24189 = c__4314__auto___24187;
var G__24190 = cljs.core.count.call(null,c__4314__auto___24187);
var G__24191 = (0);
seq__24172_24176 = G__24188;
chunk__24173_24177 = G__24189;
count__24174_24178 = G__24190;
i__24175_24179 = G__24191;
continue;
}
} else
{var n_24192 = cljs.core.first.call(null,seq__24172_24186__$1);goog.style.setStyle(n_24192,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__24193 = cljs.core.next.call(null,seq__24172_24186__$1);
var G__24194 = null;
var G__24195 = (0);
var G__24196 = (0);
seq__24172_24176 = G__24193;
chunk__24173_24177 = G__24194;
count__24174_24178 = G__24195;
i__24175_24179 = G__24196;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__24197){
var content = cljs.core.first(arglist__24197);
arglist__24197 = cljs.core.next(arglist__24197);
var name = cljs.core.first(arglist__24197);
var value = cljs.core.rest(arglist__24197);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__24202_24206 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24203_24207 = null;var count__24204_24208 = (0);var i__24205_24209 = (0);while(true){
if((i__24205_24209 < count__24204_24208))
{var n_24210 = cljs.core._nth.call(null,chunk__24203_24207,i__24205_24209);n_24210.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__24211 = seq__24202_24206;
var G__24212 = chunk__24203_24207;
var G__24213 = count__24204_24208;
var G__24214 = (i__24205_24209 + (1));
seq__24202_24206 = G__24211;
chunk__24203_24207 = G__24212;
count__24204_24208 = G__24213;
i__24205_24209 = G__24214;
continue;
}
} else
{var temp__4126__auto___24215 = cljs.core.seq.call(null,seq__24202_24206);if(temp__4126__auto___24215)
{var seq__24202_24216__$1 = temp__4126__auto___24215;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24202_24216__$1))
{var c__4314__auto___24217 = cljs.core.chunk_first.call(null,seq__24202_24216__$1);{
var G__24218 = cljs.core.chunk_rest.call(null,seq__24202_24216__$1);
var G__24219 = c__4314__auto___24217;
var G__24220 = cljs.core.count.call(null,c__4314__auto___24217);
var G__24221 = (0);
seq__24202_24206 = G__24218;
chunk__24203_24207 = G__24219;
count__24204_24208 = G__24220;
i__24205_24209 = G__24221;
continue;
}
} else
{var n_24222 = cljs.core.first.call(null,seq__24202_24216__$1);n_24222.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__24223 = cljs.core.next.call(null,seq__24202_24216__$1);
var G__24224 = null;
var G__24225 = (0);
var G__24226 = (0);
seq__24202_24206 = G__24223;
chunk__24203_24207 = G__24224;
count__24204_24208 = G__24225;
i__24205_24209 = G__24226;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__24227){
var content = cljs.core.first(arglist__24227);
arglist__24227 = cljs.core.next(arglist__24227);
var name = cljs.core.first(arglist__24227);
var value = cljs.core.rest(arglist__24227);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__24232_24236 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24233_24237 = null;var count__24234_24238 = (0);var i__24235_24239 = (0);while(true){
if((i__24235_24239 < count__24234_24238))
{var n_24240 = cljs.core._nth.call(null,chunk__24233_24237,i__24235_24239);n_24240.removeAttribute(cljs.core.name.call(null,name));
{
var G__24241 = seq__24232_24236;
var G__24242 = chunk__24233_24237;
var G__24243 = count__24234_24238;
var G__24244 = (i__24235_24239 + (1));
seq__24232_24236 = G__24241;
chunk__24233_24237 = G__24242;
count__24234_24238 = G__24243;
i__24235_24239 = G__24244;
continue;
}
} else
{var temp__4126__auto___24245 = cljs.core.seq.call(null,seq__24232_24236);if(temp__4126__auto___24245)
{var seq__24232_24246__$1 = temp__4126__auto___24245;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24232_24246__$1))
{var c__4314__auto___24247 = cljs.core.chunk_first.call(null,seq__24232_24246__$1);{
var G__24248 = cljs.core.chunk_rest.call(null,seq__24232_24246__$1);
var G__24249 = c__4314__auto___24247;
var G__24250 = cljs.core.count.call(null,c__4314__auto___24247);
var G__24251 = (0);
seq__24232_24236 = G__24248;
chunk__24233_24237 = G__24249;
count__24234_24238 = G__24250;
i__24235_24239 = G__24251;
continue;
}
} else
{var n_24252 = cljs.core.first.call(null,seq__24232_24246__$1);n_24252.removeAttribute(cljs.core.name.call(null,name));
{
var G__24253 = cljs.core.next.call(null,seq__24232_24246__$1);
var G__24254 = null;
var G__24255 = (0);
var G__24256 = (0);
seq__24232_24236 = G__24253;
chunk__24233_24237 = G__24254;
count__24234_24238 = G__24255;
i__24235_24239 = G__24256;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__24258 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__24258,(0),null);var v = cljs.core.nth.call(null,vec__24258,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
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
return (function (p1__24259_SHARP_){var attr = attrs__$1.item(p1__24259_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__24266_24272 = cljs.core.seq.call(null,styles);var chunk__24267_24273 = null;var count__24268_24274 = (0);var i__24269_24275 = (0);while(true){
if((i__24269_24275 < count__24268_24274))
{var vec__24270_24276 = cljs.core._nth.call(null,chunk__24267_24273,i__24269_24275);var name_24277 = cljs.core.nth.call(null,vec__24270_24276,(0),null);var value_24278 = cljs.core.nth.call(null,vec__24270_24276,(1),null);domina.set_style_BANG_.call(null,content,name_24277,value_24278);
{
var G__24279 = seq__24266_24272;
var G__24280 = chunk__24267_24273;
var G__24281 = count__24268_24274;
var G__24282 = (i__24269_24275 + (1));
seq__24266_24272 = G__24279;
chunk__24267_24273 = G__24280;
count__24268_24274 = G__24281;
i__24269_24275 = G__24282;
continue;
}
} else
{var temp__4126__auto___24283 = cljs.core.seq.call(null,seq__24266_24272);if(temp__4126__auto___24283)
{var seq__24266_24284__$1 = temp__4126__auto___24283;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24266_24284__$1))
{var c__4314__auto___24285 = cljs.core.chunk_first.call(null,seq__24266_24284__$1);{
var G__24286 = cljs.core.chunk_rest.call(null,seq__24266_24284__$1);
var G__24287 = c__4314__auto___24285;
var G__24288 = cljs.core.count.call(null,c__4314__auto___24285);
var G__24289 = (0);
seq__24266_24272 = G__24286;
chunk__24267_24273 = G__24287;
count__24268_24274 = G__24288;
i__24269_24275 = G__24289;
continue;
}
} else
{var vec__24271_24290 = cljs.core.first.call(null,seq__24266_24284__$1);var name_24291 = cljs.core.nth.call(null,vec__24271_24290,(0),null);var value_24292 = cljs.core.nth.call(null,vec__24271_24290,(1),null);domina.set_style_BANG_.call(null,content,name_24291,value_24292);
{
var G__24293 = cljs.core.next.call(null,seq__24266_24284__$1);
var G__24294 = null;
var G__24295 = (0);
var G__24296 = (0);
seq__24266_24272 = G__24293;
chunk__24267_24273 = G__24294;
count__24268_24274 = G__24295;
i__24269_24275 = G__24296;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__24303_24309 = cljs.core.seq.call(null,attrs);var chunk__24304_24310 = null;var count__24305_24311 = (0);var i__24306_24312 = (0);while(true){
if((i__24306_24312 < count__24305_24311))
{var vec__24307_24313 = cljs.core._nth.call(null,chunk__24304_24310,i__24306_24312);var name_24314 = cljs.core.nth.call(null,vec__24307_24313,(0),null);var value_24315 = cljs.core.nth.call(null,vec__24307_24313,(1),null);domina.set_attr_BANG_.call(null,content,name_24314,value_24315);
{
var G__24316 = seq__24303_24309;
var G__24317 = chunk__24304_24310;
var G__24318 = count__24305_24311;
var G__24319 = (i__24306_24312 + (1));
seq__24303_24309 = G__24316;
chunk__24304_24310 = G__24317;
count__24305_24311 = G__24318;
i__24306_24312 = G__24319;
continue;
}
} else
{var temp__4126__auto___24320 = cljs.core.seq.call(null,seq__24303_24309);if(temp__4126__auto___24320)
{var seq__24303_24321__$1 = temp__4126__auto___24320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24303_24321__$1))
{var c__4314__auto___24322 = cljs.core.chunk_first.call(null,seq__24303_24321__$1);{
var G__24323 = cljs.core.chunk_rest.call(null,seq__24303_24321__$1);
var G__24324 = c__4314__auto___24322;
var G__24325 = cljs.core.count.call(null,c__4314__auto___24322);
var G__24326 = (0);
seq__24303_24309 = G__24323;
chunk__24304_24310 = G__24324;
count__24305_24311 = G__24325;
i__24306_24312 = G__24326;
continue;
}
} else
{var vec__24308_24327 = cljs.core.first.call(null,seq__24303_24321__$1);var name_24328 = cljs.core.nth.call(null,vec__24308_24327,(0),null);var value_24329 = cljs.core.nth.call(null,vec__24308_24327,(1),null);domina.set_attr_BANG_.call(null,content,name_24328,value_24329);
{
var G__24330 = cljs.core.next.call(null,seq__24303_24321__$1);
var G__24331 = null;
var G__24332 = (0);
var G__24333 = (0);
seq__24303_24309 = G__24330;
chunk__24304_24310 = G__24331;
count__24305_24311 = G__24332;
i__24306_24312 = G__24333;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__24338_24342 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24339_24343 = null;var count__24340_24344 = (0);var i__24341_24345 = (0);while(true){
if((i__24341_24345 < count__24340_24344))
{var node_24346 = cljs.core._nth.call(null,chunk__24339_24343,i__24341_24345);goog.dom.classes.add(node_24346,class$);
{
var G__24347 = seq__24338_24342;
var G__24348 = chunk__24339_24343;
var G__24349 = count__24340_24344;
var G__24350 = (i__24341_24345 + (1));
seq__24338_24342 = G__24347;
chunk__24339_24343 = G__24348;
count__24340_24344 = G__24349;
i__24341_24345 = G__24350;
continue;
}
} else
{var temp__4126__auto___24351 = cljs.core.seq.call(null,seq__24338_24342);if(temp__4126__auto___24351)
{var seq__24338_24352__$1 = temp__4126__auto___24351;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24338_24352__$1))
{var c__4314__auto___24353 = cljs.core.chunk_first.call(null,seq__24338_24352__$1);{
var G__24354 = cljs.core.chunk_rest.call(null,seq__24338_24352__$1);
var G__24355 = c__4314__auto___24353;
var G__24356 = cljs.core.count.call(null,c__4314__auto___24353);
var G__24357 = (0);
seq__24338_24342 = G__24354;
chunk__24339_24343 = G__24355;
count__24340_24344 = G__24356;
i__24341_24345 = G__24357;
continue;
}
} else
{var node_24358 = cljs.core.first.call(null,seq__24338_24352__$1);goog.dom.classes.add(node_24358,class$);
{
var G__24359 = cljs.core.next.call(null,seq__24338_24352__$1);
var G__24360 = null;
var G__24361 = (0);
var G__24362 = (0);
seq__24338_24342 = G__24359;
chunk__24339_24343 = G__24360;
count__24340_24344 = G__24361;
i__24341_24345 = G__24362;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__24367_24371 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24368_24372 = null;var count__24369_24373 = (0);var i__24370_24374 = (0);while(true){
if((i__24370_24374 < count__24369_24373))
{var node_24375 = cljs.core._nth.call(null,chunk__24368_24372,i__24370_24374);goog.dom.classes.remove(node_24375,class$);
{
var G__24376 = seq__24367_24371;
var G__24377 = chunk__24368_24372;
var G__24378 = count__24369_24373;
var G__24379 = (i__24370_24374 + (1));
seq__24367_24371 = G__24376;
chunk__24368_24372 = G__24377;
count__24369_24373 = G__24378;
i__24370_24374 = G__24379;
continue;
}
} else
{var temp__4126__auto___24380 = cljs.core.seq.call(null,seq__24367_24371);if(temp__4126__auto___24380)
{var seq__24367_24381__$1 = temp__4126__auto___24380;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24367_24381__$1))
{var c__4314__auto___24382 = cljs.core.chunk_first.call(null,seq__24367_24381__$1);{
var G__24383 = cljs.core.chunk_rest.call(null,seq__24367_24381__$1);
var G__24384 = c__4314__auto___24382;
var G__24385 = cljs.core.count.call(null,c__4314__auto___24382);
var G__24386 = (0);
seq__24367_24371 = G__24383;
chunk__24368_24372 = G__24384;
count__24369_24373 = G__24385;
i__24370_24374 = G__24386;
continue;
}
} else
{var node_24387 = cljs.core.first.call(null,seq__24367_24381__$1);goog.dom.classes.remove(node_24387,class$);
{
var G__24388 = cljs.core.next.call(null,seq__24367_24381__$1);
var G__24389 = null;
var G__24390 = (0);
var G__24391 = (0);
seq__24367_24371 = G__24388;
chunk__24368_24372 = G__24389;
count__24369_24373 = G__24390;
i__24370_24374 = G__24391;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__24396_24400 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24397_24401 = null;var count__24398_24402 = (0);var i__24399_24403 = (0);while(true){
if((i__24399_24403 < count__24398_24402))
{var node_24404 = cljs.core._nth.call(null,chunk__24397_24401,i__24399_24403);goog.dom.classes.toggle(node_24404,class$);
{
var G__24405 = seq__24396_24400;
var G__24406 = chunk__24397_24401;
var G__24407 = count__24398_24402;
var G__24408 = (i__24399_24403 + (1));
seq__24396_24400 = G__24405;
chunk__24397_24401 = G__24406;
count__24398_24402 = G__24407;
i__24399_24403 = G__24408;
continue;
}
} else
{var temp__4126__auto___24409 = cljs.core.seq.call(null,seq__24396_24400);if(temp__4126__auto___24409)
{var seq__24396_24410__$1 = temp__4126__auto___24409;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24396_24410__$1))
{var c__4314__auto___24411 = cljs.core.chunk_first.call(null,seq__24396_24410__$1);{
var G__24412 = cljs.core.chunk_rest.call(null,seq__24396_24410__$1);
var G__24413 = c__4314__auto___24411;
var G__24414 = cljs.core.count.call(null,c__4314__auto___24411);
var G__24415 = (0);
seq__24396_24400 = G__24412;
chunk__24397_24401 = G__24413;
count__24398_24402 = G__24414;
i__24399_24403 = G__24415;
continue;
}
} else
{var node_24416 = cljs.core.first.call(null,seq__24396_24410__$1);goog.dom.classes.toggle(node_24416,class$);
{
var G__24417 = cljs.core.next.call(null,seq__24396_24410__$1);
var G__24418 = null;
var G__24419 = (0);
var G__24420 = (0);
seq__24396_24400 = G__24417;
chunk__24397_24401 = G__24418;
count__24398_24402 = G__24419;
i__24399_24403 = G__24420;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_24429__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__24425_24430 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24426_24431 = null;var count__24427_24432 = (0);var i__24428_24433 = (0);while(true){
if((i__24428_24433 < count__24427_24432))
{var node_24434 = cljs.core._nth.call(null,chunk__24426_24431,i__24428_24433);goog.dom.classes.set(node_24434,classes_24429__$1);
{
var G__24435 = seq__24425_24430;
var G__24436 = chunk__24426_24431;
var G__24437 = count__24427_24432;
var G__24438 = (i__24428_24433 + (1));
seq__24425_24430 = G__24435;
chunk__24426_24431 = G__24436;
count__24427_24432 = G__24437;
i__24428_24433 = G__24438;
continue;
}
} else
{var temp__4126__auto___24439 = cljs.core.seq.call(null,seq__24425_24430);if(temp__4126__auto___24439)
{var seq__24425_24440__$1 = temp__4126__auto___24439;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24425_24440__$1))
{var c__4314__auto___24441 = cljs.core.chunk_first.call(null,seq__24425_24440__$1);{
var G__24442 = cljs.core.chunk_rest.call(null,seq__24425_24440__$1);
var G__24443 = c__4314__auto___24441;
var G__24444 = cljs.core.count.call(null,c__4314__auto___24441);
var G__24445 = (0);
seq__24425_24430 = G__24442;
chunk__24426_24431 = G__24443;
count__24427_24432 = G__24444;
i__24428_24433 = G__24445;
continue;
}
} else
{var node_24446 = cljs.core.first.call(null,seq__24425_24440__$1);goog.dom.classes.set(node_24446,classes_24429__$1);
{
var G__24447 = cljs.core.next.call(null,seq__24425_24440__$1);
var G__24448 = null;
var G__24449 = (0);
var G__24450 = (0);
seq__24425_24430 = G__24447;
chunk__24426_24431 = G__24448;
count__24427_24432 = G__24449;
i__24428_24433 = G__24450;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__24455_24459 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24456_24460 = null;var count__24457_24461 = (0);var i__24458_24462 = (0);while(true){
if((i__24458_24462 < count__24457_24461))
{var node_24463 = cljs.core._nth.call(null,chunk__24456_24460,i__24458_24462);goog.dom.setTextContent(node_24463,value);
{
var G__24464 = seq__24455_24459;
var G__24465 = chunk__24456_24460;
var G__24466 = count__24457_24461;
var G__24467 = (i__24458_24462 + (1));
seq__24455_24459 = G__24464;
chunk__24456_24460 = G__24465;
count__24457_24461 = G__24466;
i__24458_24462 = G__24467;
continue;
}
} else
{var temp__4126__auto___24468 = cljs.core.seq.call(null,seq__24455_24459);if(temp__4126__auto___24468)
{var seq__24455_24469__$1 = temp__4126__auto___24468;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24455_24469__$1))
{var c__4314__auto___24470 = cljs.core.chunk_first.call(null,seq__24455_24469__$1);{
var G__24471 = cljs.core.chunk_rest.call(null,seq__24455_24469__$1);
var G__24472 = c__4314__auto___24470;
var G__24473 = cljs.core.count.call(null,c__4314__auto___24470);
var G__24474 = (0);
seq__24455_24459 = G__24471;
chunk__24456_24460 = G__24472;
count__24457_24461 = G__24473;
i__24458_24462 = G__24474;
continue;
}
} else
{var node_24475 = cljs.core.first.call(null,seq__24455_24469__$1);goog.dom.setTextContent(node_24475,value);
{
var G__24476 = cljs.core.next.call(null,seq__24455_24469__$1);
var G__24477 = null;
var G__24478 = (0);
var G__24479 = (0);
seq__24455_24459 = G__24476;
chunk__24456_24460 = G__24477;
count__24457_24461 = G__24478;
i__24458_24462 = G__24479;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__24484_24488 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24485_24489 = null;var count__24486_24490 = (0);var i__24487_24491 = (0);while(true){
if((i__24487_24491 < count__24486_24490))
{var node_24492 = cljs.core._nth.call(null,chunk__24485_24489,i__24487_24491);goog.dom.forms.setValue(node_24492,value);
{
var G__24493 = seq__24484_24488;
var G__24494 = chunk__24485_24489;
var G__24495 = count__24486_24490;
var G__24496 = (i__24487_24491 + (1));
seq__24484_24488 = G__24493;
chunk__24485_24489 = G__24494;
count__24486_24490 = G__24495;
i__24487_24491 = G__24496;
continue;
}
} else
{var temp__4126__auto___24497 = cljs.core.seq.call(null,seq__24484_24488);if(temp__4126__auto___24497)
{var seq__24484_24498__$1 = temp__4126__auto___24497;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24484_24498__$1))
{var c__4314__auto___24499 = cljs.core.chunk_first.call(null,seq__24484_24498__$1);{
var G__24500 = cljs.core.chunk_rest.call(null,seq__24484_24498__$1);
var G__24501 = c__4314__auto___24499;
var G__24502 = cljs.core.count.call(null,c__4314__auto___24499);
var G__24503 = (0);
seq__24484_24488 = G__24500;
chunk__24485_24489 = G__24501;
count__24486_24490 = G__24502;
i__24487_24491 = G__24503;
continue;
}
} else
{var node_24504 = cljs.core.first.call(null,seq__24484_24498__$1);goog.dom.forms.setValue(node_24504,value);
{
var G__24505 = cljs.core.next.call(null,seq__24484_24498__$1);
var G__24506 = null;
var G__24507 = (0);
var G__24508 = (0);
seq__24484_24488 = G__24505;
chunk__24485_24489 = G__24506;
count__24486_24490 = G__24507;
i__24487_24491 = G__24508;
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
{var value_24519 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__24515_24520 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24516_24521 = null;var count__24517_24522 = (0);var i__24518_24523 = (0);while(true){
if((i__24518_24523 < count__24517_24522))
{var node_24524 = cljs.core._nth.call(null,chunk__24516_24521,i__24518_24523);node_24524.innerHTML = value_24519;
{
var G__24525 = seq__24515_24520;
var G__24526 = chunk__24516_24521;
var G__24527 = count__24517_24522;
var G__24528 = (i__24518_24523 + (1));
seq__24515_24520 = G__24525;
chunk__24516_24521 = G__24526;
count__24517_24522 = G__24527;
i__24518_24523 = G__24528;
continue;
}
} else
{var temp__4126__auto___24529 = cljs.core.seq.call(null,seq__24515_24520);if(temp__4126__auto___24529)
{var seq__24515_24530__$1 = temp__4126__auto___24529;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24515_24530__$1))
{var c__4314__auto___24531 = cljs.core.chunk_first.call(null,seq__24515_24530__$1);{
var G__24532 = cljs.core.chunk_rest.call(null,seq__24515_24530__$1);
var G__24533 = c__4314__auto___24531;
var G__24534 = cljs.core.count.call(null,c__4314__auto___24531);
var G__24535 = (0);
seq__24515_24520 = G__24532;
chunk__24516_24521 = G__24533;
count__24517_24522 = G__24534;
i__24518_24523 = G__24535;
continue;
}
} else
{var node_24536 = cljs.core.first.call(null,seq__24515_24530__$1);node_24536.innerHTML = value_24519;
{
var G__24537 = cljs.core.next.call(null,seq__24515_24530__$1);
var G__24538 = null;
var G__24539 = (0);
var G__24540 = (0);
seq__24515_24520 = G__24537;
chunk__24516_24521 = G__24538;
count__24517_24522 = G__24539;
i__24518_24523 = G__24540;
continue;
}
}
} else
{}
}
break;
}
}catch (e24514){if((e24514 instanceof Error))
{var e_24541 = e24514;domina.replace_children_BANG_.call(null,content,value_24519);
} else
{throw e24514;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__24548_24552 = cljs.core.seq.call(null,children);var chunk__24549_24553 = null;var count__24550_24554 = (0);var i__24551_24555 = (0);while(true){
if((i__24551_24555 < count__24550_24554))
{var child_24556 = cljs.core._nth.call(null,chunk__24549_24553,i__24551_24555);frag.appendChild(child_24556);
{
var G__24557 = seq__24548_24552;
var G__24558 = chunk__24549_24553;
var G__24559 = count__24550_24554;
var G__24560 = (i__24551_24555 + (1));
seq__24548_24552 = G__24557;
chunk__24549_24553 = G__24558;
count__24550_24554 = G__24559;
i__24551_24555 = G__24560;
continue;
}
} else
{var temp__4126__auto___24561 = cljs.core.seq.call(null,seq__24548_24552);if(temp__4126__auto___24561)
{var seq__24548_24562__$1 = temp__4126__auto___24561;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24548_24562__$1))
{var c__4314__auto___24563 = cljs.core.chunk_first.call(null,seq__24548_24562__$1);{
var G__24564 = cljs.core.chunk_rest.call(null,seq__24548_24562__$1);
var G__24565 = c__4314__auto___24563;
var G__24566 = cljs.core.count.call(null,c__4314__auto___24563);
var G__24567 = (0);
seq__24548_24552 = G__24564;
chunk__24549_24553 = G__24565;
count__24550_24554 = G__24566;
i__24551_24555 = G__24567;
continue;
}
} else
{var child_24568 = cljs.core.first.call(null,seq__24548_24562__$1);frag.appendChild(child_24568);
{
var G__24569 = cljs.core.next.call(null,seq__24548_24562__$1);
var G__24570 = null;
var G__24571 = (0);
var G__24572 = (0);
seq__24548_24552 = G__24569;
chunk__24549_24553 = G__24570;
count__24550_24554 = G__24571;
i__24551_24555 = G__24572;
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
return (function (p1__24542_SHARP_,p2__24543_SHARP_){return f.call(null,p1__24542_SHARP_,p2__24543_SHARP_);
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
{if((function (){var G__24574 = list_thing;if(G__24574)
{var bit__4208__auto__ = (G__24574.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__24574.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24574.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24574);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24574);
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
{if((function (){var G__24575 = content;if(G__24575)
{var bit__4208__auto__ = (G__24575.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__24575.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24575.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24575);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24575);
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
{if((function (){var G__24576 = content;if(G__24576)
{var bit__4208__auto__ = (G__24576.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__24576.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24576.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24576);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24576);
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
